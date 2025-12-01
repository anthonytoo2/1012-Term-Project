const express = require('express');
const port = 8000;
const app = express();

// Route 
app.get('/', (req, res) => {
  res.send('Maybe user registry could be here in the future?');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});