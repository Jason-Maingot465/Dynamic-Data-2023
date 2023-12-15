const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const handler = require('./lib/handler')

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const port = process.env.port || 3000

app.get('/', (req, res) => {
    var productData = require("./data/products.json")
    var categoryData = require("./data/categories.json")
    res.render('homepage', {productData, categoryData})
})

app.get('/product/:id', handler.goToProductPage)

app.get('/category/:category', handler.goToCategoryPage)

app.post('/cart', handler.addToCartProcess)

app.post('/checkout', handler.checkout)

app.get('/thankyou', (req, res) => {
    res.render('thankyou')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((error, req, res, next) => {
    console.log(error.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => {
    console.log('Server started http://localhost:${port}')
    console.log('To close press Ctrl-C')
})