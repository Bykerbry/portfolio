const express = require("express");
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.static('dist/portfolio'))

app.get('/*', (req, res) => {
 
    return res.sendFile(path.join(__dirname,'/dist/portfolio/index.html'))
})


app.listen(port, () => {
    console.log('App running on port ' + port);
})