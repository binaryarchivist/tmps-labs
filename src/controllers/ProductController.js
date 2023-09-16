"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var ProductController = /** @class */ (function () {
    function ProductController(productService) {
        this.productService = productService;
    }
    ProductController.prototype.findByName = function (name) {
        return this.productService.findByName(name);
    };
    ProductController.prototype.save = function (product) {
        return this.productService.save(product);
    };
    return ProductController;
}());
exports.ProductController = ProductController;
