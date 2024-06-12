/* jshint esversion: 11, sub:true */

// Inner scripts
import {
    addGeneralListeners
} from "./script-general.js";

// Add listener events in buttons after loading the page.
document.addEventListener("DOMContentLoaded", function () {
    addGeneralListeners();
});