"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOf = (iterable, value, fromIndex) => {
    const length = iterable.length;
    let i = 0;
    if (fromIndex) {
        i = fromIndex;
        if (i < 0) {
            i += length;
            /* istanbul ignore else */
            if (i < 0) {
                i = 0;
            }
        }
    }
    for (; i < length; i++) {
        if (iterable[i] === value) {
            return i;
        }
    }
    return -1;
};
//# sourceMappingURL=index-of.js.map