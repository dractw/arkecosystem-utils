"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToHex = (num, padding = 2) => {
    const indexHex = Number(num).toString(16);
    return "0".repeat(padding - indexHex.length) + indexHex;
};
//# sourceMappingURL=number-to-hex.js.map