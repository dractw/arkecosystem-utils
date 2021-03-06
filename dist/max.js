"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = (values) => {
    let max = values[0];
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        max = value > max ? value : max;
    }
    return max;
};
//# sourceMappingURL=max.js.map