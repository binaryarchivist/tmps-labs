"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService(productRepository) {
        this.productRepository = productRepository;
    }
    ProductService.prototype.save = function (product) {
        var isValid = this.validate(product);
        if (!isValid) {
            throw new Error('Product already exists');
        }
        return this.productRepository.save(product);
    };
    ProductService.prototype.findByName = function (name) {
        return this.productRepository.findByName(name);
    };
    ProductService.prototype.validate = function (product) {
        var name = product.name;
        var productAlreadyExists = this.findByName(name);
        return !productAlreadyExists;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
