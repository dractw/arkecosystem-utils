"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipObject = (keys, values) => {
    const result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
};
//# sourceMappingURL=zip-object.js.map