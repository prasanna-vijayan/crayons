/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import isPlainObject from 'lodash/isPlainObject';
import clone from 'lodash/clone';
import toPath from 'lodash/toPath';
import * as Yup from 'yup';
import { TranslationController } from '../../global/Translation';
export const isSelectType = (type) => !!type && type === 'select';
export const getElementValue = (_type, event, result) => {
  let value = result && result.value;
  if (!result) {
    value = event && event.target && event.target.value;
  }
  return value;
};
/**
 * Recursively prepare values.
 */
export function prepareDataForValidation(values) {
  const data = Array.isArray(values) ? [] : {};
  for (const k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      const key = String(k);
      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map((value) => {
          if (Array.isArray(value) === true || isPlainObject(value)) {
            return prepareDataForValidation(value);
          }
          else {
            return value !== '' ? value : undefined;
          }
        });
      }
      else if (isPlainObject(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      }
      else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }
  return data;
}
export function validateYupSchema(values, schema) {
  const validateData = prepareDataForValidation(values);
  return schema['validate'](validateData, {
    abortEarly: false,
  });
}
export function yupToFormErrors(yupError) {
  let errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }
    for (const err of yupError.inner) {
      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }
  return errors || {};
}
/** @private is the given object an Object? */
export const isObject = (obj) => obj !== null && typeof obj === 'object';
/** @private is the given object an integer? */
export const isInteger = (obj) => String(Math.floor(Number(obj))) === obj;
/**
 * Deeply get a value from an object via its path.
 */
export function getIn(obj, key, def, p = 0) {
  const path = toPath(key);
  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }
  return obj === undefined ? def : obj;
}
/** set values recursively on the object based on the given path */
export function setIn(obj, path, value) {
  const res = clone(obj);
  let resVal = res;
  let i = 0;
  const pathArray = toPath(path);
  for (; i < pathArray.length - 1; i++) {
    const currentPath = pathArray[i];
    const currentObj = getIn(obj, pathArray.slice(0, i + 1));
    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone(currentObj);
    }
    else {
      const nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] =
        isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }
  // Return original object if new value is the same as current
  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }
  if (value === undefined) {
    delete resVal[pathArray[i]];
  }
  else {
    resVal[pathArray[i]] = value;
  }
  // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.
  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }
  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */
export function setNestedObjectValues(object, value, visited = new WeakMap(), response = {}) {
  for (const k of Object.keys(object)) {
    const val = object[k];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    }
    else {
      response[k] = value;
    }
  }
  return response;
}
function mergeSchema(first = {}, second = {}) {
  return first.concat(second);
}
function createYupSchema(schema, config) {
  const { type, required, name, hidden, editable } = config;
  let yupType;
  switch (type) {
    case 'TEXT':
    case 'PARAGRAPH':
    case 'DATE':
    case 'TIME':
    case 'RADIO':
    case 'EMAIL':
    case 'TEL':
    case 'URL':
    case 'DROPDOWN':
      yupType = 'string';
      break;
    case 'MULTI_SELECT':
    case 'RELATIONSHIP':
    case 'AUTO_COMPLETE':
    case 'FILES':
      yupType = 'array';
      break;
    case 'NUMBER':
    case 'DECIMAL':
      yupType = 'number';
      break;
    case 'CHECKBOX':
      yupType = 'boolean';
      break;
    default:
      yupType = 'string';
  }
  if (!type || !editable || hidden)
    return schema;
  if (!Yup[yupType]) {
    return schema;
  }
  const yupMethod = yupType;
  let validator = Yup[yupMethod];
  validator = validator().nullable();
  if (required)
    validator = validator['required']('form.required');
  else
    validator = validator['notRequired']();
  if (type === 'URL')
    validator = validator['url']('form.invalidUrl');
  if (type === 'EMAIL')
    validator = validator['email']('form.invalidEmail');
  if (type === 'NUMBER')
    validator = validator['integer']('form.invalidNumber');
  if (type === 'CHECKBOX' && required)
    validator = validator['oneOf']([true], `form.required`);
  if ((type === 'DROPDOWN' ||
    type === 'MULTI_SELECT' ||
    type === 'AUTO_COMPLETE' ||
    type === 'RELATIONSHIP') &&
    required)
    validator = validator.min(1, `form.required`);
  if (type === 'FILES' && required)
    validator = validator
      .transform((_value) => {
      return _value.filter((file) => !file.progress ||
        (file.progress &&
          file.progress !== -1 &&
          file.progress >= 0 &&
          file.progress < 100));
    })
      .min(1, `form.required`);
  if (type === 'RELATIONSHIP' || type === 'AUTO_COMPLETE')
    validator = validator.transform((_value, originalVal) => {
      return Array.isArray(originalVal)
        ? originalVal
        : originalVal !== '' &&
          originalVal !== null &&
          originalVal !== undefined
          ? [originalVal]
          : [];
    });
  schema[name] = validator;
  return schema;
}
export const generateDynamicValidationSchema = (formSchema = {}, validationSchema = {}) => {
  var _a, _b;
  let dynamicValidationSchema = Yup.object();
  try {
    const yupSchema = (_a = formSchema === null || formSchema === void 0 ? void 0 : formSchema.fields) === null || _a === void 0 ? void 0 : _a.reduce(createYupSchema, {});
    // form the implicit validation schema based on the fields in formSchema
    dynamicValidationSchema =
      (_b = (yupSchema && Yup.object().shape(yupSchema))) !== null && _b !== void 0 ? _b : Yup.object();
    const formValidationSchema = mergeSchema(dynamicValidationSchema || Yup.object(), validationSchema && Object.keys(validationSchema).length
      ? validationSchema
      : Yup.object());
    return formValidationSchema;
  }
  catch (err) {
    console.error('Error in merging validationSchema with implicit validation rules. Please check if you are using `0.32` version of `Yup` for `validationSchema` ', err.message);
    return dynamicValidationSchema;
  }
};
export const generateDynamicInitialValues = (formSchema, initialValues = {}) => {
  var _a;
  const getInitialValueFromType = (type) => {
    let initialValue;
    switch (type) {
      case 'CHECKBOX':
        initialValue = false;
        break;
      case 'FILES':
        initialValue = [];
        break;
      default:
        break;
    }
    return initialValue;
  };
  const dynamicInitialValues = ((_a = formSchema === null || formSchema === void 0 ? void 0 : formSchema.fields) === null || _a === void 0 ? void 0 : _a.reduce((acc, field) => {
    if (!(field === null || field === void 0 ? void 0 : field.type)) {
      return null;
    }
    return Object.assign(Object.assign({}, acc), { [field.name]: getInitialValueFromType(field.type) });
  }, {})) || {};
  const formInitialValues = Object.assign(Object.assign({}, dynamicInitialValues), initialValues);
  return formInitialValues;
};
export const serializeForm = (values = {}, fields = {}) => {
  let newValues = Object.assign({}, values);
  newValues = Object.entries(newValues).reduce((acc, [key, val]) => {
    var _a;
    const type = (_a = fields[key]) === null || _a === void 0 ? void 0 : _a.type;
    switch (type) {
      case 'NUMBER':
      case 'DECIMAL':
        const parsed = parseFloat(val);
        return Object.assign(Object.assign({}, acc), { [key]: isNaN(parsed) ? undefined : parsed });
      case 'DATE':
        if (!val)
          return Object.assign(Object.assign({}, acc), { [key]: undefined });
        // if the value is of the ISO UTC time format, timezone offset need not be calculated
        // when datepicker is used in form component, the value will be passed to form in UTC ISO format, hence skipping.
        const utcTimeRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})[+-](\d{2}):(\d{2})/;
        // If ISO format, format it to display format and validate
        let date;
        if (utcTimeRegex.test(val)) {
          date = new Date(val);
        }
        else {
          date = new Date(handleUserTimeZoneOffset(val));
        }
        if (date.toString() === 'Invalid Date') {
          return Object.assign(Object.assign({}, acc), { [key]: undefined });
        }
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        /** prepend 0 if the date/month is less than 10 */
        dt = ('0' + dt).slice(-2);
        month = ('0' + month).slice(-2);
        return Object.assign(Object.assign({}, acc), { [key]: `${year}-${month}-${dt}` });
      case 'RELATIONSHIP':
      case 'AUTO_COMPLETE':
        if (Array.isArray(val) && typeof val[0] === 'object') {
          if (val.length > 1) {
            // multiselect
            return Object.assign(Object.assign({}, acc), { [key]: val === null || val === void 0 ? void 0 : val.map((v) => v.value) });
          }
          return Object.assign(Object.assign({}, acc), { [key]: val === null || val === void 0 ? void 0 : val.map((v) => v.value)[0] });
        }
        return Object.assign(Object.assign({}, acc), { [key]: val });
      case 'FILES':
        const data = new DataTransfer();
        val.forEach((uploaderFile) => {
          data.items.add(uploaderFile.file);
        });
        return Object.assign(Object.assign({}, acc), { [key]: data.files });
      default:
        return Object.assign(Object.assign({}, acc), { [key]: val });
    }
  }, {});
  return newValues;
};
export const translateErrors = async (errors = {}, fields) => {
  var _a;
  if (!errors)
    return {};
  return (_a = Object.keys(errors)) === null || _a === void 0 ? void 0 : _a.reduce((acc, key) => {
    var _a, _b;
    if (key && errors[key]) {
      return Object.assign(Object.assign({}, acc), { [key]: TranslationController.t(errors[key], {
          field: ((_a = fields === null || fields === void 0 ? void 0 : fields[key]) === null || _a === void 0 ? void 0 : _a.label) || ((_b = fields === null || fields === void 0 ? void 0 : fields[key]) === null || _b === void 0 ? void 0 : _b.name) || '',
        }) });
    }
    return Object.assign({}, acc);
  }, {});
};
const formServFieldTypes = {
  '1': { type: 'TEXT' },
  '2': { type: 'DROPDOWN' },
  '3': { type: 'EMAIL' },
  '4': { type: 'PHONE_NUMBER' },
  '5': { type: 'CHECKBOX' },
  '6': { type: 'PARAGRAPH' },
  '7': { type: 'DATE_TIME' },
  '8': { type: 'NUMBER' },
  '10': { type: 'URL' },
  '12': { type: 'RADIO' },
  '13': { type: 'DECIMAL' },
  '14': { type: 'SECTION' },
  '16': { type: 'AUTO_COMPLETE' },
  '17': { type: 'DATE' },
  '18': { type: 'MULTI_SELECT' },
  '20': { type: 'BIG_NUMBER' },
  '22': { type: 'DEPENDENT_FIELD' },
};
export const LEGO = 'LEGO';
export const FORMSERV = 'FORMSERV';
export const CUSTOM = 'CUSTOM';
const supportedMapperTypes = [LEGO, FORMSERV, CUSTOM];
export function getMappedSchema({ type = LEGO, schema = { fields: [] }, customTypeMapper = {}, } = {}) {
  var _a, _b;
  if (!supportedMapperTypes.includes(type)) {
    console.error(`invalid mapperType: ${type} prop passed. It must be one of ${supportedMapperTypes}`);
    return { fields: [] };
  }
  if (type === LEGO)
    return schema;
  else {
    const mapperTypes = type === FORMSERV ? formServFieldTypes : customTypeMapper;
    if (type === CUSTOM && !customTypeMapper) {
      console.error('invalid customTypeMapper prop passed. Please check the documentation for the correct format');
      return { fields: [] };
    }
    const newFields = (_b = (_a = schema === null || schema === void 0 ? void 0 : schema.fields) === null || _a === void 0 ? void 0 : _a.map((field) => {
      var _a;
      return Object.assign(Object.assign({}, field), { type: (_a = mapperTypes[field === null || field === void 0 ? void 0 : field.type]) === null || _a === void 0 ? void 0 : _a.type });
    })) !== null && _b !== void 0 ? _b : [];
    const newSchema = Object.assign(Object.assign({}, schema), { fields: newFields });
    return newSchema;
  }
}
export function getValueForField(values, field) {
  var _a, _b, _c, _d;
  let value;
  const type = (_b = (_a = field === null || field === void 0 ? void 0 : field.type) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : 'TEXT';
  switch (type) {
    case 'CHECKBOX':
      value = !!values[field.name];
      break;
    case 'MULTI_SELECT':
      value = (_c = values[field.name]) !== null && _c !== void 0 ? _c : [];
      break;
    case 'DROPDOWN':
      value = (_d = values[field.name]) !== null && _d !== void 0 ? _d : '';
      break;
    default:
      value = values[field.name];
  }
  return value;
}
const handleUserTimeZoneOffset = (date) => {
  return (new Date(date).valueOf() + new Date(date).getTimezoneOffset() * 60 * 1000);
};
