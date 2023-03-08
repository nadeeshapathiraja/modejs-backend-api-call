const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var connection = require('./database/db_connection')
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getCustomers', (req, res) => {
  console.log("Get api Call");
  connection.query('SELECT * FROM customer', (err, rows) => {
    if (err) throw err
    res.json(rows);
  })
  console.log(req.body);
})

app.post('/addCustomer', (req, res) => {
  console.log("Post api Call");
  // connection.query('INSERT INTO customer VALUES (?,?,?,?)',[req.id44    ])
  console.log(res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})