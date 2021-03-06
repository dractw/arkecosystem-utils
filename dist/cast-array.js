"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_array_1 = require("./is-array");
const is_function_1 = require("./is-function");
const is_null_1 = require("./is-null");
const is_string_1 = require("./is-string");
const is_undefined_1 = require("./is-undefined");
exports.castArray = (value) => {
    if (is_null_1.isNull(value) || is_undefined_1.isUndefined(value)) {
        return [];
    }
    if (is_array_1.isArray(value)) {
        return value;
    }
    if (is_string_1.isString(value)) {
        return [value];
    }
    if (is_function_1.isFunction(value[Symbol.iterator])) {
        return [...value];
    }
    return [value];
};
//# sourceMappingURL=cast-array.js.map