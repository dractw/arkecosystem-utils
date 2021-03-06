"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = (iterable, iteratee) => {
    const groupedValues = {};
    for (const value of iterable) {
        const keyValue = iteratee(value);
        if (!groupedValues[keyValue]) {
            groupedValues[keyValue] = [];
        }
        groupedValues[keyValue].push(value);
    }
    return groupedValues;
};
//# sourceMappingURL=group-by.js.map