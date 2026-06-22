"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chrome = void 0;
const Browser_1 = require("./Browser");
class Chrome extends Browser_1.Browser {
    openIncognito() {
        console.log("Chrome incognito window is opened");
    }
    clearCache() {
        console.log("Chrome cache is cleared");
    }
    openURL() {
        console.log("Chrome is opening URL with fast loading");
    }
}
exports.Chrome = Chrome;
