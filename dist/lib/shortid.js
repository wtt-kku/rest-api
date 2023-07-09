"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortid = void 0;
const getRandomValues = require("get-random-values");
class Shortid {
    dec2hex(dec) {
        return dec.toString(16).padStart(2, '0');
    }
    generateId(len) {
        var arr = new Uint8Array((len || 40) / 2);
        getRandomValues(arr);
        return '_' + Array.from(arr, this.dec2hex).join('');
    }
}
const shortid = new Shortid();
exports.shortid = shortid;
//# sourceMappingURL=shortid.js.map