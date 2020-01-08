import { CodeMirror } from "./edit/main.js";
// Import UMD modules, note that they will use CodeMirror as global variable
import "../addon/edit/matchbrackets.js";
import "../addon/edit/closetag.js";
import "../mode/xml/xml.js";
import "../mode/javascript/javascript.js";
import "../mode/css/css.js";
import "../mode/clike/clike.js";
import "../mode/htmlmixed/htmlmixed.js";
import "../mode/htmlembedded/htmlembedded.js";
import "../mode/properties/properties.js";
import "../mode/jsp/jsp.js"

export default CodeMirror;