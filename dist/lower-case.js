"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
exports.lowerCase = (value) => internal_1.compoundWords(value, (result, word, index) => result + (index ? " " : "") + word.toLowerCase());
//# sourceMappingURL=lower-case.js.map