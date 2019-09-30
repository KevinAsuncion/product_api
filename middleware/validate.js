
module.exports = {
    validId(req, res, next) {
        if (!isNaN(req.params.id)) {
            return next();
        } else {
            next(new Error('Invalid ID'));
        }
    },
    validProductUpdate(updatedProduct) {
        const { color, price, productName, department } = updatedProduct;
        const validColor = typeof color === 'string';
        const validProductName = typeof productName === 'string';
        const validDepartment = typeof department === 'string';
        const validPrice = !isNaN(price);
        return validColor && validDepartment && validPrice && validProductName;
    }
}



