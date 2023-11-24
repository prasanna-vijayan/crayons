import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as isEqual, a as hasSlot, r as renderHiddenField, h as handleKeyDown } from './index2.js';
import { F as FieldControl } from './field-control.js';
import { T as TranslationController } from './Translation2.js';
import { d as defineCustomElement$b } from './avatar.js';
import { d as defineCustomElement$a } from './button.js';
import { d as defineCustomElement$9 } from './checkbox.js';
import { d as defineCustomElement$8 } from './icon.js';
import { d as defineCustomElement$7 } from './input.js';
import { d as defineCustomElement$6 } from './list-options.js';
import { d as defineCustomElement$5 } from './popover.js';
import { d as defineCustomElement$4 } from './select-option.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './tag.js';
import { d as defineCustomElement$1 } from './tooltip.js';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

const selectCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media screen and (prefers-reduced-motion: reduce){.input-container{-webkit-transition:none;transition:none}}:host{display:block}.button-container{display:-ms-flexbox;display:flex}.button-container fw-button{display:-ms-flexbox;display:flex;min-width:0}.button-container .display-tag{display:-ms-flexbox;display:flex;min-width:0}.input-container{width:calc(100% - 12px);border:var(--fw-select-border, 1px solid #cfd7df);border-radius:var(--fw-select-border-radius, 4px);-webkit-padding-start:10px;padding-inline-start:10px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;min-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}.input-container .input-container-inner{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap;min-width:0}.input-container .input-container-inner .tag-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-width:inherit;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;-webkit-padding-start:2px;padding-inline-start:2px;}.input-container .input-container-inner .tag-container.avatar{min-height:40px}.input-container .input-container-inner .tag-container:active,.input-container .input-container-inner .tag-container:focus,.input-container .input-container-inner .tag-container:focus-visible{outline:0}.input-container .input-container-inner .tag-container fw-tag{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-after:4px;margin-block-end:4px;-webkit-margin-end:4px;margin-inline-end:4px;-webkit-margin-before:4px;margin-block-start:4px;display:-ms-flexbox;display:flex;min-width:inherit;--fw-popover-min-width:0}.input-container .input-container-inner input{-ms-flex-positive:1;flex-grow:1;width:100px;border:none;font-family:inherit;font-size:14px;font-weight:500;letter-spacing:0;line-height:1.4;background-color:#fff;min-width:20px;min-height:22px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;margin-inline:0px;margin-block:4px}.input-container .input-container-inner input:focus{border:none;outline:none}.input-container .input-container-inner input.multi-select{width:auto}.input-container .input-container-inner input:disabled{color:#92a2b1;background-color:#f5f7f9 !important;border-color:transparent;pointer-events:none}.input-container fw-spinner{-webkit-margin-end:8px;margin-inline-end:8px}.input-container:hover,.input-container:focus{border:1px #475867 solid}.input-container.error{border-color:#d72d30}.input-container.error.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.input-container.error:hover,.input-container.error:focus{border-color:#d72d30}.input-container.error+.help-block{color:#d72d30}.input-container.warning{border-color:#f8ab59}.input-container.warning.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.input-container.warning:hover,.input-container.warning:focus{border-color:#f8ab59}.input-container.warning+.help-block{color:#f8ab59}.input-container.select-disabled{color:#92a2b1;border:var(--fw-select-border, 1px solid #ebeff3);background-color:#f5f7f9 !important;border-style:solid;cursor:not-allowed}.input-container.select-disabled:hover,.input-container.select-disabled:focus{border:1px solid #ebeff3}.tag-container .bold-tag{font-weight:600}.tag-container .tag-clickable{cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tag-container .tag-disabled{cursor:not-allowed;pointer-events:none}.has-focus .input-container{outline:none;background:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}.has-focus .input-container.error{border-color:#d72d30;-webkit-box-shadow:none;box-shadow:none}.has-focus .input-container.error.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.has-focus .input-container.error:hover,.has-focus .input-container.error:focus{border-color:#d72d30}.has-focus .input-container.error+.help-block{color:#d72d30}.has-focus .input-container.warning{border-color:#f8ab59;-webkit-box-shadow:0 0 0 1px #f8ab59;box-shadow:0 0 0 1px #f8ab59}.has-focus .input-container.warning.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.has-focus .input-container.warning:hover,.has-focus .input-container.warning:focus{border-color:#f8ab59}.has-focus .input-container.warning+.help-block{color:#f8ab59}.select-container{-webkit-margin-after:var(--fw-select-margin-bottom, 0px);margin-block-end:var(--fw-select-margin-bottom, 0px);width:inherit;height:inherit;position:relative}.select-container .dropdown{z-index:99}.select-container .dropdown-status-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-margin-end:8px;margin-inline-end:8px;min-width:20px;min-height:20px;-webkit-transition:all 0.15s;transition:all 0.15s;--icon-color:$color-elephant-800}.select-container .help-block{font-size:12px;-webkit-margin-before:4px;margin-block-start:4px;line-height:20px;color:#acb6be;position:inherit;-webkit-margin-after:0;margin-block-end:0;display:block;-webkit-padding-start:2px;padding-inline-start:2px}:host(:not([dir=\"rtl\"])) .select-container .dropdown-status-icon.expanded,:host([dir=\"ltr\"]) .select-container .dropdown-status-icon.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([dir=\"rtl\"]) .select-container .dropdown-status-icon.expanded{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.select-container .dropdown-status-icon.disabled{opacity:0.5}.select-container.error{border-color:#d72d30}.select-container.error.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.select-container.error:hover,.select-container.error:focus{border-color:#d72d30}.select-container.error+.help-block{color:#d72d30}.select-container.warning{border-color:#f8ab59}.select-container.warning.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.select-container.warning:hover,.select-container.warning:focus{border-color:#f8ab59}.select-container.warning+.help-block{color:#f8ab59}::-webkit-input-placeholder{color:#92a2b1;opacity:1}::-moz-placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1;opacity:1}::-ms-input-placeholder{color:#92a2b1;opacity:1}::placeholder{color:#92a2b1;opacity:1}::-webkit-input-placeholder{color:#92a2b1}::-moz-placeholder{color:#92a2b1}:-ms-input-placeholder{color:#92a2b1}:-moz-placeholder{color:#92a2b1}";

const Select = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwChange = createEvent(this, "fwChange", 7);
    this.fwFocus = createEvent(this, "fwFocus", 7);
    this.fwBlur = createEvent(this, "fwBlur", 7);
    this.tagArrowKeyCounter = 0;
    this.changeEmittable = () => !this.disabled;
    this.innerOnFocus = (e) => {
      if (this.changeEmittable()) {
        this.hasFocus = true;
        this.fwFocus.emit(e);
        this.focusedValues = [];
      }
    };
    this.innerOnClick = () => {
      var _a, _b;
      if (this.changeEmittable()) {
        this.setFocus();
        // Select the whole text in case of single select
        this.multiple || ((_b = (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.select) === null || _b === void 0 ? void 0 : _b.call(_a));
        if (!['search', 'mail'].includes(this.variant)) {
          this.openDropdown();
        }
        this.focusedValues = [];
      }
    };
    this.innerOnBlur = (e) => {
      if (this.changeEmittable()) {
        this.hasFocus = false;
        this.fwBlur.emit({
          event: e,
          name: this.name,
        });
      }
    };
    this.openDropdown = () => {
      if (!this.isExpanded && this.changeEmittable()) {
        this.popoverRef.show();
      }
    };
    this.closeDropdown = () => {
      if (this.isExpanded && this.changeEmittable()) {
        this.popoverRef.hide();
      }
    };
    /**
     * If the dropdown is shown or not
     */
    this.isExpanded = false;
    this.hasFocus = false;
    this.selectedOptionsState = [];
    this.isLoading = false;
    this.focusedOptionId = '';
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.focusedValues = [];
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Type of option accepted as the input value. If a user tries to enter an option other than the specified type, the list is not populated.
     */
    this.type = 'text';
    /**
     * Theme based on which the list box is styled.
     */
    this.state = 'normal';
    /**
     * If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true.
     */
    this.readonly = false;
    /**
     * Specifies the select field as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * If true, the user must select a value. The default value is not displayed.
     */
    this.forceSelect = true;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to false.
     */
    this.multiple = false;
    /**
     * Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.
     */
    this.max = Number.MAX_VALUE;
    /**
     * The UI variant of the select to be used.
     */
    this.variant = 'standard';
    /**
     * Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.
     * The props for the icon or avatar are passed as an object via the graphicsProps.
     */
    this.optionsVariant = 'standard';
    /**
     * Allow to search for value. Default is true.
     */
    this.searchable = true;
    /**
     * Place a checkbox.
     */
    this.checkbox = false;
    /**
     * Default option to be shown if the option doesn't match the filterText.
     */
    // @i18n({ keyName: 'search.noItemsFound' })
    this.notFoundText = '';
    /**
     * Text to be displayed when there is no data available in the select.
     */
    // @i18n({ keyName: 'search.noDataAvailable' })
    this.noDataText = '';
    /**
     * Debounce timer for the search promise function.
     */
    this.debounceTimer = 300;
    /**
     * Array of the options that is displayed as the default selection, in the list box. Must be a valid option corresponding to the fw-select-option components used in Select.
     */
    this.selectedOptions = [];
    /**
     * Whether the select width to be same as that of the options.
     */
    this.sameWidth = true;
    /**
     * Placement of the options list with respect to select.
     */
    this.optionsPlacement = 'bottom';
    /**
     * Alternative placement for popover if the default placement is not possible.
     */
    this.fallbackPlacements = ['top'];
    /**
     * The variant of tag to be used.
     */
    this.tagVariant = 'standard';
    /**
     * Whether the arrow/caret should be shown in the select.
     */
    this.caret = true;
    /**
     * If the default label prop is not used, then use this prop to pass the id of the label.
     */
    this.labelledBy = '';
    /**
     * Whether clicking on the already selected option disables it.
     */
    this.allowDeselect = true;
    /**
     * Hint text displayed below the text box.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the text box.
     */
    this.warningText = '';
    /**
     * Error text displayed below the text box.
     */
    this.errorText = '';
    /**
     * Props to be passed for creatable select
     * isCreatable: boolean - If true, select accepts user input that are not present as options and add them as options
     * validateNewOption: (value) => boolean - If passed, this function will determine the error state for every new option entered. If return value is true, error state of the newly created option will be false and if return value is false, then the error state of the newly created option will be true.
     * formatCreateLabel: (label) => string - Gets the label for the "create new ..." option in the menu. Current input value is provided as argument.
     */
    this.creatableProps = {
      isCreatable: false,
      validateNewOption: (_value) => true,
      formatCreateLabel: (label) => label,
    };
    /**
     *  Option to prevent the select options from being clipped when the component is placed inside a container with
     * `overflow: auto|hidden|scroll`.
     */
    this.hoist = false;
    /**
     *  Key for determining the label for a given option
     */
    this.optionLabelPath = 'text';
    /**
     *  Key for determining the value for a given option
     */
    this.optionValuePath = 'value';
    /**
     *  Sets the max height of select with multiple options selected and displays a scroll when maxHeight value is exceeded
     */
    this.maxHeight = 'none';
    /**
     *  Props to be passed for fw-tag components displayed in multi-select.
     */
    this.tagProps = {};
    this.matchValueWithOptions = () => {
      var _a;
      if (((_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        // Check whether the selected data in the this.dataSource  matches the value
        const selectedDataSource = this.dataSource.filter((option) => this.isValueEqual(this.value, option));
        const selectedDataSourceValues = selectedDataSource.map((option) => option[this.optionValuePath]);
        const selected = this.multiple
          ? selectedDataSourceValues
          : selectedDataSourceValues[0];
        if (!isEqual(this.value, selected)) {
          if (selected) {
            this.value = selected;
          }
          else {
            this.value = this.multiple ? [] : '';
          }
        }
        if (JSON.stringify(this.selectedOptionsState) !==
          JSON.stringify(selectedDataSource)) {
          this.selectedOptionsState = selectedDataSource;
        }
      }
      else {
        this.value = this.multiple ? [] : '';
      }
      this.renderInput();
    };
    this.tagContainerKeyDown = (ev) => {
      var _a, _b, _c, _d, _e;
      if (this.changeEmittable()) {
        switch (ev.key) {
          case 'Escape':
            this.innerOnBlur(ev);
            this.closeDropdown();
            break;
          case 'Delete':
          case 'Backspace':
            this.deleteFocusedTags();
            break;
          case 'ArrowLeft':
            if (((_a = this.focusedValues) === null || _a === void 0 ? void 0 : _a.length) === 0) {
              this.focusOnTagContainer();
            }
            else if (this.tagArrowKeyCounter - 1 >= 0) {
              // should not focus disabled tag
              if (!((_b = this.selectedOptionsState[this.tagArrowKeyCounter - 1]) === null || _b === void 0 ? void 0 : _b.disabled)) {
                this.tagArrowKeyCounter--;
                this.focusOnTag(this.tagArrowKeyCounter);
              }
            }
            else {
              this.tagArrowKeyCounter = 0;
            }
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            break;
          case 'ArrowRight':
            if (this.tagArrowKeyCounter + 1 >= ((_c = this.value) === null || _c === void 0 ? void 0 : _c.length)) {
              (_d = this.selectInput) === null || _d === void 0 ? void 0 : _d.focus();
            }
            else if (this.tagArrowKeyCounter <= ((_e = this.value) === null || _e === void 0 ? void 0 : _e.length)) {
              this.tagArrowKeyCounter++;
              this.focusOnTag(this.tagArrowKeyCounter);
            }
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            break;
        }
      }
    };
  }
  onDropdownClose(e) {
    var _a;
    if (e.composedPath()[0].id === 'select-popover') {
      this.clearInput();
      this.isExpanded = false;
      this.multiple && ((_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.focus());
    }
  }
  onDropdownOpen(e) {
    if (e.composedPath()[0].id === 'select-popover') {
      this.isExpanded = true;
    }
  }
  onLoading(event) {
    var _a, _b;
    this.isLoading = event.detail.isLoading;
    if (['search', 'mail'].includes(this.variant) && !this.isLoading) {
      ((_b = (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()) && this.openDropdown();
    }
  }
  fwSelectedHandler(selectedItem) {
    var _a, _b, _c;
    if (selectedItem.composedPath()[0].tagName === 'FW-LIST-OPTIONS') {
      this.selectedOptionsState = (_b = (_a = selectedItem.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.selectedOptions;
      this.value = selectedItem.detail.value;
      this.renderInput();
      if (!this.multiple || ['search', 'mail'].includes(this.variant)) {
        this.closeDropdown();
      }
      selectedItem.stopImmediatePropagation();
      selectedItem.stopPropagation();
      selectedItem.preventDefault();
      if (((_c = this.selectedOptionsState) === null || _c === void 0 ? void 0 : _c.length) > 0) {
        this.fwChange.emit({
          name: this.name,
          value: this.value,
          meta: { selectedOptions: this.selectedOptionsState },
        });
      }
      else {
        this.fwChange.emit({
          name: this.name,
          value: this.value,
          meta: {
            shouldValidate: false,
            selectedOptions: this.selectedOptionsState,
          },
        });
      }
    }
  }
  // Listen to Tag close in case of multi-select
  fwCloseHandler(ev) {
    var _a;
    this.setSelectedOptions((_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.filter((_, index) => index !== ev.detail.index));
    this.focusOnTagContainer();
  }
  onKeyDown(ev) {
    var _a, _b, _c;
    if (this.changeEmittable()) {
      switch (ev.key) {
        case 'ArrowDown':
          this.innerOnClick();
          this.fwListOptions.setFocus();
          ev.preventDefault();
          ev.stopPropagation();
          break;
        case 'Delete':
        case 'Backspace':
          if (!this.readonly && this.multiple) {
            this.deleteFocusedTags();
            if (this.focusedValues.length === 0 &&
              ((_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.value) === '') {
              this.focusOnTagContainer();
            }
          }
          break;
        case 'Escape':
          this.innerOnBlur(ev);
          this.closeDropdown();
          break;
        case 'Tab':
          this.focusedValues = [];
          this.closeDropdown();
          break;
        case 'a':
        case 'A':
          if (!this.readonly &&
            this.multiple &&
            (ev.ctrlKey || ev.metaKey) &&
            (!this.searchValue || this.focusedValues.length > 0)) {
            ev.preventDefault();
            ev.stopPropagation();
            (_b = this.tagContainer) === null || _b === void 0 ? void 0 : _b.focus();
            this.focusedValues = (_c = this.selectedOptionsState) === null || _c === void 0 ? void 0 : _c.reduce((arr, option, i) => (!option.disabled && arr.push(i), arr), []);
          }
          break;
      }
    }
  }
  onOptionFocus(event) {
    if (event.composedPath()[0].tagName === 'FW-SELECT-OPTION') {
      this.focusedOptionId = event.detail.id;
    }
  }
  onOptionBlur(event) {
    if (event.composedPath()[0].tagName === 'FW-SELECT-OPTION') {
      this.focusedOptionId = '';
    }
  }
  optionsChangedHandler() {
    this.renderInput();
  }
  onOptionsChange(newValue) {
    var _a;
    const selectedValues = newValue === null || newValue === void 0 ? void 0 : newValue.filter((option) => option.selected);
    // If selected key is available in options schema use it
    // Or check for the value
    if ((selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length) > 0) {
      this.selectedOptionsState = selectedValues;
      this.value = this.multiple
        ? this.selectedOptionsState.map((x) => x[this.optionValuePath])
        : (_a = this.selectedOptionsState[0]) === null || _a === void 0 ? void 0 : _a[this.optionValuePath];
      this.dataSource = newValue;
    }
    else if (this.valueExists()) {
      this.dataSource = newValue;
      // match value and selectedOptionsState with the updated options when value is already provided
      this.matchValueWithOptions();
    }
    else {
      this.value = this.multiple ? [] : '';
      this.selectedOptionsState = [];
      this.dataSource = newValue;
    }
  }
  // Watcher to update selected options state on selectedOptions prop update
  onSelectedOptionsChange(newValue) {
    this.setSelectedOptions(newValue);
  }
  async getSelectedItem() {
    var _a;
    return (_a = this.fwListOptions) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();
  }
  async setSelectedValues(values) {
    var _a;
    (_a = this.fwListOptions) === null || _a === void 0 ? void 0 : _a.setSelectedValues(values);
    this.renderInput();
  }
  async setSelectedOptions(options) {
    var _a;
    (_a = this.fwListOptions) === null || _a === void 0 ? void 0 : _a.setSelectedOptions(options);
    this.renderInput();
  }
  async setFocus() {
    var _a;
    this.hasFocus = true;
    (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /**
   * Shows the dropdown panel
   */
  async showDropdown() {
    this.openDropdown();
  }
  /**
   * Hides the dropdown panel
   */
  async hideDropdown() {
    this.closeDropdown();
  }
  deleteFocusedTags() {
    var _a;
    if (this.focusedValues.length > 0) {
      // delete focused values
      this.setSelectedOptions((_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.filter((_, index) => !this.focusedValues.includes(index)));
      // reset focused values
      this.focusedValues = [];
    }
  }
  focusOnTagContainer() {
    var _a, _b, _c;
    if (Array.isArray(this.value) &&
      !((_b = this.selectedOptionsState[((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) - 1]) === null || _b === void 0 ? void 0 : _b.disabled)) {
      this.tagArrowKeyCounter = ((_c = this.value) === null || _c === void 0 ? void 0 : _c.length) - 1;
      this.focusOnTag(this.tagArrowKeyCounter);
    }
  }
  focusOnTag(index) {
    var _a;
    if (!((_a = this.selectedOptionsState[index]) === null || _a === void 0 ? void 0 : _a.disabled)) {
      this.focusedValues = [index];
      this.tagContainer.focus();
      const tags = this.tagContainer.querySelectorAll('fw-tag');
      [...tags][index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }
  clearInput() {
    if (!this.multiple && this.value) {
      this.renderInput();
      return;
    }
    this.searchValue = '';
    if (this.selectInput) {
      this.selectInput.value = '';
    }
  }
  isValueEqual(value, option) {
    return this.multiple
      ? value.includes(option[this.optionValuePath])
      : value === option[this.optionValuePath];
  }
  valueExists() {
    var _a;
    return (this.value && (this.multiple ? ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0 : !!this.value));
  }
  onInput() {
    var _a, _b;
    if (this.changeEmittable()) {
      this.searchValue = (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.value;
      if ((_b = this.selectInput) === null || _b === void 0 ? void 0 : _b.value) {
        !['search', 'mail'].includes(this.variant) && this.openDropdown();
      }
      else {
        // Clear selected value in case of single select.
        this.multiple || this.setSelectedValues('');
        ['search', 'mail'].includes(this.variant) && this.closeDropdown();
      }
      this.focusedValues = [];
    }
  }
  onClickTag(e, index) {
    var _a;
    if (this.changeEmittable()) {
      e.stopPropagation();
      this.tagContainer.focus();
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
      if (!((_a = this.selectedOptionsState[index]) === null || _a === void 0 ? void 0 : _a.disabled)) {
        const focusedIndex = this.focusedValues.indexOf(index);
        if (focusedIndex === -1) {
          if (e.ctrlKey || e.metaKey) {
            // Add indices to focusedValues if ctrl or cmd key is held down
            this.focusedValues = [...this.focusedValues, index];
          }
          else if (e.shiftKey && this.focusedValues.length > 0) {
            // Select range of indices to be focused if shift key is held down
            const startIndex = this.focusedValues[this.focusedValues.length - 1];
            const endIndex = index > startIndex ? index + 1 : index - 1;
            this.focusedValues = uniq([
              ...this.focusedValues,
              ...range(startIndex, endIndex),
            ]);
          }
          else {
            // Clicking on a tag without ctrl/cmd/shift key held down should focus a single index
            this.focusedValues = [index];
          }
        }
        else if (e.ctrlKey || e.metaKey) {
          // Remove index from focusedValues if already present and ctrl or cmd key is held down
          this.focusedValues = this.focusedValues.filter((_, index) => index !== focusedIndex);
        }
        else if (!e.shiftKey) {
          // Highlight current index alone if ctrl/cmd/shift key is not held down
          this.focusedValues = [index];
        }
      }
    }
  }
  renderTags() {
    var _a;
    if (this.multiple && Array.isArray(this.value)) {
      return (_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.map((option, index) => {
        if (this.isValueEqual(this.value, option)) {
          const optionState = option.error || (this.variant === 'mail' && index >= this.max)
            ? 'error'
            : 'normal';
          const className = this.disabled || option.disabled ? 'tag-disabled' : 'tag-clickable';
          const displayAttributes = this.variant === 'mail'
            ? {
              text: option[this.optionValuePath],
              showEllipsisOnOverflow: true,
              class: className + ' bold-tag',
            }
            : {
              text: option[this.optionLabelPath],
              subText: option.subText,
            };
          return (h("fw-tag", Object.assign({ index: index, class: className, state: optionState, variant: this.tagVariant, graphicsProps: option.graphicsProps, disabled: this.disabled || option.disabled, value: option[this.optionValuePath], focusable: false, closable: !this.disabled && !option.disabled, isFocused: this.focusedValues.includes(index), onClick: (e) => this.onClickTag(e, index) }, displayAttributes, this.tagProps)));
        }
      });
    }
  }
  renderButtonValue() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (this.tagVariant === 'avatar' &&
      ((_a = this.selectedOptionsState[0]) === null || _a === void 0 ? void 0 : _a[this.optionValuePath])) {
      return (h("fw-tag", { class: 'display-tag', state: 'transparent', variant: 'avatar', graphicsProps: (_b = this.selectedOptionsState[0]) === null || _b === void 0 ? void 0 : _b.graphicsProps, text: (_c = this.selectedOptionsState[0]) === null || _c === void 0 ? void 0 : _c[this.optionLabelPath], subText: ((_d = this.selectedOptionsState[0]) === null || _d === void 0 ? void 0 : _d.subText)
          ? `<${(_e = this.selectedOptionsState[0]) === null || _e === void 0 ? void 0 : _e.subText}>`
          : '', disabled: (_f = this.selectedOptionsState[0]) === null || _f === void 0 ? void 0 : _f.disabled, value: (_g = this.selectedOptionsState[0]) === null || _g === void 0 ? void 0 : _g[this.optionValuePath], focusable: false, closable: false, showEllipsisOnOverflow: true }));
    }
    else {
      return this.value;
    }
  }
  renderInput() {
    var _a;
    if (((_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      if (this.selectInput) {
        this.selectInput.value = '';
        this.selectInput.value = this.multiple
          ? this.selectInput.value
          : this.selectedOptionsState[0][this.optionLabelPath] || '';
      }
    }
    else {
      if (this.selectInput) {
        this.selectInput.value = '';
      }
    }
  }
  renderSelectInput() {
    return (h("input", { ref: (selectInput) => (this.selectInput = selectInput), class: {
        'multiple-select': this.multiple,
      }, autoComplete: 'off', disabled: this.disabled, name: this.name, id: this.name, placeholder: this.valueExists() ? '' : this.placeholder || '', readOnly: this.readonly, required: this.required, type: this.type, value: '', "aria-autocomplete": 'list', "aria-activedescendant": this.focusedOptionId, onInput: () => this.onInput(), onFocus: (e) => this.innerOnFocus(e), onBlur: (e) => this.innerOnBlur(e), "aria-invalid": this.state === 'error', "aria-describedby": `hint-${this.name} error-${this.name}`, onPaste: (e) => this.onPaste(e), "aria-disabled": this.disabled }));
  }
  onClickOutside(e) {
    if (!e.composedPath().includes(this.host) &&
      this.focusedValues.length > 0) {
      this.focusedValues = [];
    }
  }
  componentWillLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.boundary || (this.boundary = this.host.parentElement);
    this.checkSlotContent();
    if (this.variant === 'mail') {
      this.caret = false;
      this.multiple = true;
    }
    //TODO: The below is a rough draft and needs to be optimized for better performance.
    const selectOptions = Array.from(this.host.querySelectorAll('fw-select-option'));
    // Set value if the selectedOptions is provided
    if (((_a = this.selectedOptions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      this.selectedOptionsState = this.selectedOptions;
      this.value = this.multiple
        ? this.selectedOptions.map((option) => option[this.optionValuePath])
        : this.selectedOptions[0][this.optionValuePath];
    }
    if (this.multiple) {
      if (this.multiple && typeof this.value === 'string') {
        throw Error('value must be a array of string when multiple is true');
      }
      this.value = ((_b = this.value) === null || _b === void 0 ? void 0 : _b.length) > 0 ? this.value : [];
    }
    else {
      this.value = this.value ? this.value : '';
    }
    const options = selectOptions.map((option) => {
      return {
        html: option.html,
        [this.optionLabelPath]: option.html
          ? option.optionText
          : option.textContent,
        [this.optionValuePath]: option.value,
        selected: this.isValueEqual(this.value, option) || option.selected,
        disabled: option.disabled,
        htmlContent: option.html ? option.innerHTML : '',
      };
    });
    this.dataSource = options.length === 0 ? this.options : options;
    // Set selectedOptions if the value is provided
    if (!this.multiple && this.value && ((_c = this.selectedOptions) === null || _c === void 0 ? void 0 : _c.length) === 0) {
      this.selectedOptionsState = (_d = this.dataSource) === null || _d === void 0 ? void 0 : _d.filter((option) => this.value === option[this.optionValuePath]);
    }
    else if (this.multiple &&
      ((_e = this.value) === null || _e === void 0 ? void 0 : _e.length) !== ((_f = this.selectedOptions) === null || _f === void 0 ? void 0 : _f.length)) {
      this.selectedOptionsState = (_g = this.dataSource) === null || _g === void 0 ? void 0 : _g.filter((option) => this.isValueEqual(this.value, option));
    }
    if (((_h = this.dataSource) === null || _h === void 0 ? void 0 : _h.length) > 0) {
      // Check whether the selected data in the this.dataSource  matches the value
      const selectedDataSource = this.dataSource.filter((option) => option.selected);
      const selectedDataSourceValues = selectedDataSource.map((option) => option[this.optionValuePath]);
      const selected = this.multiple
        ? selectedDataSourceValues
        : selectedDataSourceValues[0];
      if (selectedDataSourceValues.length > 0 &&
        JSON.stringify(this.value) !== JSON.stringify(selected)) {
        this.value = selected;
        this.selectedOptionsState = selectedDataSource;
      }
    }
    this.host.addEventListener('focus', this.setFocus);
    //this.host.innerHTML = '';
    //Get id
    this.hostId = this.host.id || '';
    // Add event listener to track clicks outside the element to blur selected tags
    document.addEventListener('mouseup', this.onClickOutside.bind(this));
  }
  componentDidLoad() {
    this.renderInput();
  }
  disconnectedCallback() {
    this.host.removeEventListener('focus', this.setFocus);
    document.removeEventListener('mouseup', this.onClickOutside.bind(this));
  }
  expandWatcher(expanded) {
    var _a, _b, _c, _d;
    if (this.variant === 'button') {
      const icon = (_d = (_c = (_b = (_a = this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.select-container')) === null || _b === void 0 ? void 0 : _b.querySelector('fw-button')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('fw-icon');
      icon && (icon.name = expanded ? 'chevron-up' : 'chevron-down');
    }
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  onPaste(e) {
    var _a;
    // Allow paste only if isCreatable is true
    if ((_a = this.creatableProps) === null || _a === void 0 ? void 0 : _a.isCreatable) {
      // Get pasted data via clipboard API
      const clipboardData = (e === null || e === void 0 ? void 0 : e.clipboardData) || window['clipboardData'];
      const pastedData = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('Text');
      if (pastedData.includes('\n') || pastedData.includes(',')) {
        // Stop data actually being pasted into input
        e.stopPropagation();
        e.preventDefault();
        // Split strings either by new line or comma
        const values = pastedData.split(/[\n,]/);
        const valuesToBeInput = [];
        values.forEach((value) => {
          var _a, _b;
          const sanitisedValue = value.trim();
          // Check value presence
          if (sanitisedValue) {
            valuesToBeInput.push({
              [this.optionLabelPath]: sanitisedValue,
              [this.optionValuePath]: sanitisedValue,
              error: typeof ((_a = this.creatableProps) === null || _a === void 0 ? void 0 : _a.validateNewOption) === 'function'
                ? !((_b = this.creatableProps) === null || _b === void 0 ? void 0 : _b.validateNewOption(sanitisedValue))
                : false,
            });
          }
        });
        // Sets the selected options with the custom data
        if (valuesToBeInput.length > 0) {
          this.setSelectedOptions([
            ...this.selectedOptionsState,
            ...valuesToBeInput,
          ]);
        }
      }
    }
  }
  render() {
    const { host, name, value } = this;
    renderHiddenField(host, name, value);
    const listAttributes = Object.assign(Object.assign({}, this.creatableProps), (this.variant === 'mail' ? {} : { max: this.max }));
    return (h(FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required }, h("div", { "aria-disabled": this.disabled, class: {
        'has-focus': this.hasFocus,
      } }, h("div", { class: {
        'select-container': true,
        [this.state]: true,
      }, role: 'combobox', "aria-controls": `${this.hostId}-listbox`, "aria-haspopup": 'listbox', "aria-expanded": this.isExpanded, "aria-owns": `${this.hostId}-listbox` }, h("fw-popover", { id: 'select-popover', distance: '8', trigger: 'manual', ref: (popoverRef) => (this.popoverRef = popoverRef), sameWidth: this.sameWidth, placement: this.optionsPlacement, fallbackPlacements: this.fallbackPlacements, boundary: this.boundary, hoist: this.hoist }, h("div", { slot: 'popover-trigger', class: {
        'input-container': this.variant !== 'button',
        [this.state]: true,
        'select-disabled': this.disabled,
        'button-container': this.variant === 'button',
      }, onClick: () => this.innerOnClick(), onKeyDown: handleKeyDown(this.innerOnClick, true) }, this.variant === 'button' ? (h("fw-button", { style: { '--fw-button-label-vertical-padding': '7px' }, "show-caret-icon": true, id: `${this.hostId}-btn`, color: this.tagVariant === 'avatar' ? 'text' : 'secondary', class: this.host.classList.value.includes('first')
        ? 'fw-button-group__button--first'
        : this.host.classList.value.includes('last')
          ? 'fw-button-group__button--last'
          : '', "aria-disabled": this.disabled, disabled: this.disabled }, this.renderButtonValue())) : (h(Fragment, null, h("div", { class: 'input-container-inner' }, this.multiple ? (h("div", { class: `tag-container ${this.tagVariant}`, onFocus: this.focusOnTagContainer, ref: (tagContainer) => (this.tagContainer = tagContainer), onKeyDown: this.tagContainerKeyDown, tabIndex: -1, style: {
        'max-height': this.maxHeight,
      } }, this.renderTags(), this.renderSelectInput())) : (this.renderSelectInput())), this.isLoading ? (h("fw-spinner", { size: 'small' })) : (this.caret && (h("span", { class: {
        'dropdown-status-icon': true,
        'expanded': this.isExpanded,
        'disabled': this.disabled,
      } }, h("fw-icon", { name: 'chevron-down', size: 8, library: 'system' }))))))), h("fw-list-options", Object.assign({ ref: (fwListOptions) => (this.fwListOptions = fwListOptions), id: `${this.hostId}-listbox`, role: 'listbox', "aria-labelledby": this.labelledBy || `${this.hostId}-label`, notFoundText: this.notFoundText ||
        TranslationController.t('search.noItemsFound'), debounceTimer: this.debounceTimer, noDataText: this.noDataText ||
        TranslationController.t('search.noDataAvailable'), search: this.search, selectedOptions: this.selectedOptionsState, variant: this.optionsVariant, "filter-text": this.searchValue, options: this.dataSource, value: this.value, multiple: this.multiple, disabled: this.disabled, checkbox: this.checkbox, allowDeselect: this.allowDeselect, slot: 'popover-content', optionLabelPath: this.optionLabelPath, optionValuePath: this.optionValuePath }, listAttributes)))))));
  }
  get host() { return this; }
  static get watchers() { return {
    "dataSource": ["optionsChangedHandler"],
    "options": ["onOptionsChange"],
    "selectedOptions": ["onSelectedOptionsChange"],
    "isExpanded": ["expandWatcher"]
  }; }
  static get style() { return selectCss; }
}, [1, "fw-select", {
    "label": [1],
    "value": [1032],
    "name": [1],
    "type": [1],
    "placeholder": [1],
    "state": [1],
    "readonly": [4],
    "required": [4],
    "forceSelect": [4, "force-select"],
    "disabled": [4],
    "multiple": [1028],
    "max": [2],
    "variant": [1],
    "optionsVariant": [1, "options-variant"],
    "searchable": [4],
    "options": [8],
    "checkbox": [4],
    "notFoundText": [1025, "not-found-text"],
    "search": [8],
    "noDataText": [1025, "no-data-text"],
    "debounceTimer": [2, "debounce-timer"],
    "selectedOptions": [1040],
    "sameWidth": [4, "same-width"],
    "optionsPlacement": [1, "options-placement"],
    "fallbackPlacements": [16],
    "tagVariant": [1, "tag-variant"],
    "caret": [1028],
    "labelledBy": [1, "labelled-by"],
    "allowDeselect": [4, "allow-deselect"],
    "hintText": [1, "hint-text"],
    "warningText": [1, "warning-text"],
    "errorText": [1, "error-text"],
    "boundary": [1040],
    "creatableProps": [16],
    "hoist": [4],
    "optionLabelPath": [1, "option-label-path"],
    "optionValuePath": [1, "option-value-path"],
    "maxHeight": [1, "max-height"],
    "tagProps": [16],
    "isExpanded": [32],
    "hasFocus": [32],
    "searchValue": [32],
    "dataSource": [32],
    "selectedOptionsState": [32],
    "isLoading": [32],
    "focusedOptionId": [32],
    "hasHintTextSlot": [32],
    "hasWarningTextSlot": [32],
    "hasErrorTextSlot": [32],
    "focusedValues": [32],
    "getSelectedItem": [64],
    "setSelectedValues": [64],
    "setSelectedOptions": [64],
    "setFocus": [64],
    "showDropdown": [64],
    "hideDropdown": [64]
  }, [[0, "fwHide", "onDropdownClose"], [0, "fwShow", "onDropdownOpen"], [0, "fwLoading", "onLoading"], [0, "fwChange", "fwSelectedHandler"], [0, "fwClosed", "fwCloseHandler"], [0, "keydown", "onKeyDown"], [0, "fwFocus", "onOptionFocus"], [0, "fwBlur", "onOptionBlur"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-select", "fw-avatar", "fw-button", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select-option", "fw-spinner", "fw-tag", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Select);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { Select as S, defineCustomElement as d };
