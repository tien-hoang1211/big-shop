let ProductCategory = require('../models/ProductCategory');
let category = new ProductCategory(1);
let productCategoryController = {
    index: async(req, res) => {
        res.render('ProductCategory/index', {
            title: 'Danh mục sản phẩm',
            banerTitle: 'Danh mục sản phẩm',
            productCategory: await category.getAll()
        });
    }
};

module.exports = productCategoryController;