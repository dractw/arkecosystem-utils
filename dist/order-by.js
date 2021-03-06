"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_sort_1 = __importDefault(require("fast-sort"));
const is_function_1 = require("./is-function");
const is_string_1 = require("./is-string");
const map_1 = require("./map");
exports.orderBy = (values, iteratees, orders) => {
    if (is_string_1.isString(iteratees)) {
        iteratees = [iteratees];
    }
    else if (is_function_1.isFunction(iteratees)) {
        iteratees = [iteratees];
    }
    if (is_string_1.isString(orders)) {
        orders = [orders];
    }
    return fast_sort_1.default(values).by(map_1.map(iteratees, (_, index) => ({ [orders[index]]: iteratees[index] })));
};
//# sourceMappingURL=order-by.js.map