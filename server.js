const express = require("express");
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const cors = require('cors')
const path = require('path')
require('dotenv').config();


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

app.post('/send', (req, res) => {
    const output = ` 
        <h1> New message from your Portfolio</h1>
        <ul> 
            <li> First Name: ${ req.body.firstName }</li>
            <li> Last Name: ${ req.body.lastName }</li>
            <li> Company: ${ req.body.company }</li>
            <li> E-mail: ${ req.body.email }</li>
        </ul>
        <h3>Message</h3>
        <p>${ req.body.message }</p>
        `
    let transporter =  nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    mailOptions = {
        from: '"Nodemailer" <bykerportfolio@gmail.com>',
        to: 'bykerportfolio@gmail.com',
        subject: 'Message from your Portfolio Site',
        text: '',
        html: output
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("There was an error...", error);
        }
        console.log('Message sent!', info.messageId);
        console.log('Preview URL: ', nodemailer.getTestMessageUrl(info));
        res.status(200)
        res.json(info)
    })

})

app.listen(port, () => {
    console.log('App running on port ' + port);
})