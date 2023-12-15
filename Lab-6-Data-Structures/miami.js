const express = require('express')

// Add the view engine
const expressHandlebars = require('express-handlebars')

const app = express()

const data = ""

// Configure express app to use handlebars
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')
// Ends handlebars config

// Static files or folders are specified before any route
app.use(express.static(__dirname + "/public"))

const port = process.env.port || 3000

const gallery = require('./data/gallery.json');

// Routes go before 404 and 500
app.get('/', (req,res) => {
    var data = require("./data/home-data.json")
    res.render('page',{data, gallery})
})

app.get('/zoo', (req,res) => {
    var data = require("./data/zoo-data.json")
    res.render('page',{data, gallery})
})

app.get('/everglades', (req,res) => {
    var data = require("./data/everglades-data.json")
    res.render('page',{data, gallery})
})

app.get('/beach', (req,res) => {
    var data = require("./data/beach-data.json")
    res.render('page',{data, gallery})
})

app.get('/keys', (req,res) => {
    var data = require("./data/keys-data.json")
    res.render('page',{data, gallery})
})

// Error handling -> app.use() basic express route
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

// Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('500')
})

app.listen(port,() => {
    console.log(`Server started http://localhost:${port}`)
    //console.log('Server started http://localhost:' + port)
    console.log('To close press Ctrl-C')
})
