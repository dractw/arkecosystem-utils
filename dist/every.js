"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.every = (subject, iterator) => {
    for (let i = 0; i < subject.length; i++) {
        if (!iterator(subject[i], i, subject)) {
            return false;
        }
    }
    return true;
};
//# sourceMappingURL=every.js.map