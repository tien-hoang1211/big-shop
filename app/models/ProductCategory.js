let queryDB = require('../../config/database');
class ProductCategory {
    constructor(id, name, seo_url, meta_title, meta_description, displayorder, status) {
        this.id = id;
        this.name = name;
        this.seo_url = seo_url;
        this.meta_title = meta_title;
        this.meta_description = meta_description;
        this.displayorder = displayorder;
        this.status = status;
    }

    async getAll() {
        const sql = 'SELECT * FROM public."ProductCategory"';
        const result = await queryDB(sql, []);
        if (result.rows.length === 0) throw new Error('Khong tim thay duong dan');
        return result.rows;
    }
}

module.exports = ProductCategory;