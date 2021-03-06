"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_array_1 = require("./map-array");
exports.minBy = (iterable, iteratee) => {
    const values = map_array_1.mapArray(iterable, iteratee);
    let index = 0;
    let smallest = values[index];
    for (let i = 0; i < values.length; i++) {
        if (values[i] < smallest) {
            smallest = values[i];
            index = i;
        }
    }
    return iterable[index];
};
//# sourceMappingURL=min-by.js.map