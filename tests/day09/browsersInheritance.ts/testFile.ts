import { Chrome } from "./Chrome"
import { Edge } from "./Edge"

const chrome = new Chrome("Chrome", 120)

chrome.openURL()
chrome.navigateBack()
chrome.closeBrowser()
chrome.openIncognito()
chrome.clearCache()

console.log("----------------")

const edge = new Edge("Edge", 121)

edge.openURL()
edge.navigateBack()
edge.closeBrowser()
edge.takeSnap()
edge.clearCookies()

console.log("----------------")

