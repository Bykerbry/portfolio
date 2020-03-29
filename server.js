const express = require("express");
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.static('dist/portfolio'))

app.get('/*', (req, res) => {
    let options = {
        root: path.join(__dirname, 'dist/portfolio')
    }
    return res.sendFile('index.html', options)
})


app.listen(port, () => {
    console.log('App running on port ' + port);
})