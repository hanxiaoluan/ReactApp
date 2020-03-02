const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('hello world'));
app.listen(3000, () => console.log('app is runing on port 3000'));