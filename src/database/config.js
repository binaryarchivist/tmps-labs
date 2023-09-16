"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.default = {
    db: JSON.parse(fs.readFileSync('src/database/db.json', 'utf-8'))
};
