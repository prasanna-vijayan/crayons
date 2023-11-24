import { FormValues } from './form-declaration';
export declare const isSelectType: (type: string) => boolean;
export declare const getElementValue: (_type: string, event: any, result: any) => any;
/**
 * Recursively prepare values.
 */
export declare function prepareDataForValidation(values: [] | any): any;
export declare function validateYupSchema(values: any, schema: any): Promise<any>;
export declare function yupToFormErrors(yupError: any): any;
/** @private is the given object an Object? */
export declare const isObject: (obj: any) => boolean;
/** @private is the given object an integer? */
export declare const isInteger: (obj: any) => boolean;
/**
 * Deeply get a value from an object via its path.
 */
export declare function getIn(obj: any, key: string | string[], def?: any, p?: number): any;
/** set values recursively on the object based on the given path */
export declare function setIn(obj: any, path: string, value: any): any;
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */
export declare function setNestedObjectValues<T>(object: any, value: any, visited?: any, response?: any): T;
export declare const generateDynamicValidationSchema: (formSchema?: any, validationSchema?: any) => any;
export declare const generateDynamicInitialValues: (formSchema: any, initialValues?: FormValues) => FormValues;
export declare const serializeForm: (values?: FormValues, fields?: any) => FormValues;
export declare const translateErrors: (errors: {}, fields: any) => Promise<{
  [x: string]: any;
}>;
export declare const LEGO = "LEGO";
export declare const FORMSERV = "FORMSERV";
export declare const CUSTOM = "CUSTOM";
export declare function getMappedSchema({ type, schema, customTypeMapper, }?: {
  type?: string;
  schema?: {
    fields: any[];
  };
  customTypeMapper?: {};
}): {
  fields: any[];
};
export declare function getValueForField(values: any, field: any): any;
