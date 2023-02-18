const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log("Get api Call");
  console.log(req.body);
})

app.post('/customer', (req, res) => {
  console.log("Post api Call");
  console.log(res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})