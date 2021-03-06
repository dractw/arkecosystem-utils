"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceArray = (iterable, iteratee, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < iterable.length; i++) {
        result = iteratee(result, iterable[i], i, iterable);
    }
    return result;
};
//# sourceMappingURL=reduce-array.js.map