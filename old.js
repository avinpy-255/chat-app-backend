const express = require('express')

const app =express()

function PasswordValidator(req, res, next) {
    if (token != 0 || tokenz != 2) {
        res.status(403).json({
            message: 'Invalid token'
        })
    }else {
        next();
    }
}

function Password2Validator(req, res, next) {
    if (token2 != 0 || tokenz2 != 4) {
        res.status(403).json({
            message: 'Invalid token'
        })
    }else {
        next();
    }
}

app.get("/a", Password2Validator, PasswordValidator, function(req, res){
    res.json({
        message: 'Access granted'
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


