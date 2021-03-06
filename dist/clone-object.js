"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneObject = (input) => {
    const keys = Object.keys(input);
    const cloned = {};
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        cloned[key] = input[key];
    }
    return cloned;
};
//# sourceMappingURL=clone-object.js.map