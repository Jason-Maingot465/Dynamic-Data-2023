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

// Routes go before 404 and 500
app.get('/', (req,res) => {
    var data = require("./data/home-data.json")
    res.render('page',{data})
})
app.get('/about', (req,res) => {
    res.render('about', {
         title:"About Miami",
         pageTitle:"About Miami Travel",
         image:"miami-2.jpg",
         description:"Miami is a beautiful city"
        })
})
// This gives error, request should be req and response should be res or vice versa
app.get('/nightlife', (req,res) => {
    res.render('nightlife')
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