"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneArray = (input) => {
    const sliced = new Array(input.length);
    for (let i = 0; i < input.length; i++) {
        sliced[i] = input[i];
    }
    return sliced;
};
//# sourceMappingURL=clone-array.js.map