"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = (values) => {
    let min = values[0];
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        min = value < min ? value : min;
    }
    return min;
};
//# sourceMappingURL=min.js.map