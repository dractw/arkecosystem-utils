"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_sort_1 = __importDefault(require("fast-sort"));
exports.sortByDesc = (values, iteratees) => fast_sort_1.default(values).desc(iteratees);
//# sourceMappingURL=sort-by-desc.js.map