"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastIndexOf = (subject, target, fromIndex) => {
    const length = subject.length;
    let i = length - 1;
    if (fromIndex) {
        i = fromIndex;
        if (i < 0) {
            i += length;
        }
    }
    for (; i >= 0; i--) {
        if (subject[i] === target) {
            return i;
        }
    }
    return -1;
};
//# sourceMappingURL=last-index-of.js.map