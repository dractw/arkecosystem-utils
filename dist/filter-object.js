"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObject = (iterable, iteratee) => {
    const keys = Object.keys(iterable);
    const length = keys.length;
    const result = {};
    for (let i = 0; i < length; i++) {
        const key = keys[i];
        if (iteratee(iterable[key], key, iterable)) {
            result[key] = iterable[key];
        }
    }
    return result;
};
//# sourceMappingURL=filter-object.js.map