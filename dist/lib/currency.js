"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toShowCurrency = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.default = toShowCurrency;
//# sourceMappingURL=currency.js.map