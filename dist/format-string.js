"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatString = (...args) => {
    let output = args[0];
    args.shift();
    for (let i = 0; i < args.length; i++) {
        output = output.replace(`{${i}}`, args[i]);
    }
    return output;
};
//# sourceMappingURL=format-string.js.map