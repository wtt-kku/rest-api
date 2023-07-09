"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeVat = (x) => {
    let r = x - (x / 100) * 7;
    let f = (r / 100) * 20;
    return f;
};
exports.default = removeVat;
//# sourceMappingURL=remove-vat.js.map