const express = require('express');
var app = express();

require('./config')(app);

let controller = require('./app/controllers');
app.get('/admin', controller.home.index);
app.get('/admin/product-category', controller.productCategory.index);
app.get('/admin/product-category/update/:id', controller.productCategory.update);

app.listen(3000, console.log('Server started!'));