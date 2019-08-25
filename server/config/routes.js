const products = require('./../controllers/products');

module.exports = (app) => {
    app.get('/products', products.index),
    app.post('/new', products.new),
    app.get('/product/:id', products.show),
    app.put('/update/:id', products.update),
    app.delete('/remove/:id', products.destroy)
}
