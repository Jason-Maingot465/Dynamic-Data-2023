let eList = require('../data/emails.json');

const fs = require('fs');

exports.newsletterSignup = (req,res) => {
    res.render('newsletter-signup', { csrf : 'supersecret'  })
}

exports.newsletterSignupList = (req,res) => {
    res.render('userspage', { 'users': eList.users })
}

exports.newsletterUser = (req,res) => {
    var userDetails = eList.users.filter((user)=>{
        return user.email == req.params.email
    })
    console.log(userDetails)
    res.render('userdetails', {"users": userDetails})
}

exports.newsletterUserDelete = (req,res) => {
    var users = eList.users.filter((user)=>{
        return user.email != req.params.email
    })
    var json = JSON.stringify(users)
    fs.writeFile('./data/emails.json',json,'utf-8',()=>{})
    console.log(users)
    res.redirect(303, '/newsletter/list')
}

exports.newsletterSignupProcess = (req,res) => {
    //Then we do something here
    console.log(req.body)

    var newUser = {
        'firstName' : req.body.firstName,
        'lastName' : req.body.lastName,
        'email' : req.body.email,
        'address' : req.body.address,
        'city' : req.body.city,
        'state' : req.body.state,
        'zip' : req.body.zip
    }

    eList.users.push(newUser)

    var json = JSON.stringify(eList);
    console.log(json)

    fs.writeFile('./data/emails.json',json,'utf-8',()=>{})


    console.log(eList.users)

    //res.send("you posted something to /process " + req.body.email)
    res.redirect(303, '/newsletter/thankyou')
}