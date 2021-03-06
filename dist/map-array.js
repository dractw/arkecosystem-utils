"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapArray = (iterable, iteratee) => {
    const result = new Array(iterable.length);
    for (let i = 0; i < iterable.length; i++) {
        result[i] = iteratee(iterable[i], i, iterable);
    }
    return result;
};
//# sourceMappingURL=map-array.js.map