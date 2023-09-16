"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.display = function () {
        console.log("Product: ".concat(this.name, ", Price: ").concat(this.price));
    };
    return Product;
}());
exports.Product = Product;
