const express = require('express');
const port = 8000;
const app = express();

// Route to receive messages
app.post('/buddy', (req, res) => {
  res.send('Hey, so There was gonna be a Variable sent here but it \didn\'t work out'); // optional response
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});