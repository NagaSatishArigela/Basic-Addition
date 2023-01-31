const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/:a/:b', (req, res) => {
    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const sum = a + b
    console.log(sum);
  res.send(`${sum}`);
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);