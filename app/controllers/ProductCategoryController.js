let ProductCategory = require('../models/ProductCategory');

let productCategoryController = {
    index: async(req, res) => {
        let category = new ProductCategory(1);
        res.render('ProductCategory/index', {
            title: 'Danh mục sản phẩm',
            banerTitle: 'Danh mục sản phẩm',
            productCategory: await category.getAll()
        });
    },
    update: async(req, res) => {
        let { id } = req.params;
        let category = new ProductCategory(id);
        let info = await category.getById();
        res.render('ProductCategory/update', {
            title: 'Cập nhật danh mục sản phẩm',
            banerTitle: 'Cập nhật danh mục sản phẩm',
            productCategory: info
        });
    }
};

module.exports = productCategoryController;