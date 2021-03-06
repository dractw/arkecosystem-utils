"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRightObject = (iterable, iteratee, initialValue) => {
    const keys = Object.keys(iterable);
    let result = initialValue;
    for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        result = iteratee(result, iterable[key], key, iterable);
    }
    return result;
};
//# sourceMappingURL=reduce-right-object.js.map