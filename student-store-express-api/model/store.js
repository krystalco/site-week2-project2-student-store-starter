const {storage} = require("../data/storage")

const getAllProducts = () => {
    return storage.get("products")
}

const getProductById = (id) => {
    return storage.get('products').find((product) => product.id === id)
};
module.exports = {
    getAllProducts,
    getProductById
}