
const mongoose = require('mongoose');
const Product = mongoose.model('Product')

module.exports = {
    index: (req, res) => {
        Product.find()
        .then(response => res.json(response))
        .catch(err => res.json(err))
    },
    new: (req, res) => {
        Product.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
    },
    show: (req, res) => {
        const { id } = req.params;
        Product.findOne({_id: id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
    },
    update: (req, res) => {
        const { id } = req.params;
        Product.updateOne({_id: id}, req.body, { runValidators: true })
        .then(response => res.json(response))
        .catch(err => res.json(err))
    },
    destroy: (req, res) => {
        const { id } = req.params;
        Product.deleteOne({_id: id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
    }
}

