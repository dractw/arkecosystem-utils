"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = require("./filter");
exports.reject = (iterable, iteratee) => filter_1.filter(iterable, item => !iteratee(item));
//# sourceMappingURL=reject.js.map