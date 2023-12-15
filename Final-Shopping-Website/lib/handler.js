let orderList = require('../data/orders.json')
let cart = {"products" : []}

const fs = require('fs')

exports.goToProductPage = (req, res) => {
    var allProducts = require('../data/products.json')
    var category

    var productInfo = allProducts.products.filter((product) => {
        if (product.id == req.params.id) {
            category = product.category
        }
        return product.id == req.params.id
    })
    var recommendedInfo = allProducts.products.filter((product) => {
        return (product.category == category && product.id != req.params.id)
    })

    res.render('product', {"productInfo": productInfo, "recommendedInfo": recommendedInfo})
}

exports.goToCategoryPage = (req, res) => {
    var allProducts = require('../data/products.json')
    var allCategories = require('../data/categories.json')

    var categoryInfo = allCategories.categories.filter((category) =>  category.url == req.params.category)
    var productInfos = allProducts.products.filter((product) => product.category == req.params.category)
    res.render('category', {"productInfos": productInfos, "categoryInfo": categoryInfo})
}

exports.addToCartProcess = (req, res) => {
    var allProducts = require('../data/products.json')
    var productInfo = allProducts.products.filter((product) => {
        return product.id == req.body.productId
    })
    cart.products.push(productInfo)
    res.render('cart', {'cartProducts': cart.products})
}

exports.checkout = (req, res) => {
    var newOrder = {
        'name': req.body.customername,
        'address': req.body.customeraddress,
        'email': req.body.customeremail,
        'phone': req.body.customerphone,
        'order': cart.products
    }
    orderList.orders.push(newOrder)

    var json = JSON.stringify(orderList)

    fs.writeFileSync('./data/orders.json', json, "utf8", () => {})
    
    res.redirect(303, '/thankyou')
}