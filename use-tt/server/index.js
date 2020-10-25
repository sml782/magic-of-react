const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
console.log(app.get);
app.get('/api/swr', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      data: 'aaaaa',
    });
  }, 2000);
});

app.listen(8888);
