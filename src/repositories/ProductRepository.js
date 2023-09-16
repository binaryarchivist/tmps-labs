"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
var fs = require("fs");
var config_1 = require("../database/config");
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
        var _a;
        this.products = ((_a = config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.db) === null || _a === void 0 ? void 0 : _a.products) || [];
    }
    ProductRepository.prototype.findAll = function () {
        return this.products;
    };
    ProductRepository.prototype.findByName = function (name) {
        var _a;
        return (_a = this.products) === null || _a === void 0 ? void 0 : _a.find(function (prod) { return prod.name === name; });
    };
    ProductRepository.prototype.save = function (product) {
        fs.writeFileSync('src/database/db.json', JSON.stringify({
            products: __spreadArray(__spreadArray([], this.products, true), [product], false)
        }, null, '\t'));
        this.products = __spreadArray(__spreadArray([], this.products, true), [product], false);
        return product;
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
