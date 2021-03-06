"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRightArray = (iterable, iteratee, initialValue) => {
    let result = initialValue;
    for (let i = iterable.length - 1; i >= 0; i--) {
        result = iteratee(result, iterable[i], i, iterable);
    }
    return result;
};
//# sourceMappingURL=reduce-right-array.js.map