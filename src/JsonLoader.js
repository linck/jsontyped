"use strict";
var fs = require("fs");
var path = require("path");
var JsonLoader = (function () {
    function JsonLoader() {
    }
    JsonLoader.loadFile = function (filePath, fileName) {
        var file = path.join(filePath, fileName);
        if (fs.existsSync(file)) {
            return JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }).toString());
        }
        else {
            console.log("File " + filePath + fileName + " not found");
            return null;
        }
    };
    return JsonLoader;
}());
exports.JsonLoader = JsonLoader;
//# sourceMappingURL=JsonLoader.js.map