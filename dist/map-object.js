"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObject = (iterable, iteratee) => {
    const keys = Object.keys(iterable);
    const result = new Array(keys.length);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        result[i] = iteratee(iterable[key], key, iterable);
    }
    return result;
};
//# sourceMappingURL=map-object.js.map