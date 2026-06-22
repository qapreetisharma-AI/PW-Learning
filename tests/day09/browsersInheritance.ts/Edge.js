"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edge = void 0;
const Browser_1 = require("./Browser");
class Edge extends Browser_1.Browser {
    takeSnap() {
        console.log("Screenshot captured in Edge browser");
    }
    clearCookies() {
        console.log("Edge cookies are cleared");
    }
    navigateBack() {
        console.log("Edge browser navigated back using back button");
    }
}
exports.Edge = Edge;
