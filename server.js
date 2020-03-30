const express = require("express");
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000;


// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

// Static folder
app.use(express.static('dist/portfolio'))
app.use(cors())

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname,'/dist/portfolio/index.html'))
})

app.post('/contact', (req, res) => {
    console.log("Post request made")
    console.log(req.body);
    res.send
})

app.listen(port, () => {
    console.log('App running on port ' + port);
})