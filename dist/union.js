"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten_1 = require("./flatten");
const uniq_1 = require("./uniq");
exports.union = (...args) => uniq_1.uniq(flatten_1.flatten(args));
//# sourceMappingURL=union.js.map