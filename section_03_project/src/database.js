const sequence = {
    _id: 1,
    // works like property on python
    get id() { return this._id++ }

}

const products = {}

function saveProduct(product) {
    if (!product) product.id = sequence.id
    products[product.id] = product
    return product
}

function getProduct(id) {
    return producs[id] || {}
}

function getProducts() {
    return Object.values(products)
}

module.exports = {
    saveProduct,
    getProduct,
    getProducts
}
