"use strict";
// Taken from https://raw.githubusercontent.com/lodash/lodash/4.17.15-post/lodash.js
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next */
exports.slice = (array, start, end) => {
    let index = -1;
    let length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : (end - start) >>> 0;
    start >>>= 0;
    const result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
};
//# sourceMappingURL=slice.js.map