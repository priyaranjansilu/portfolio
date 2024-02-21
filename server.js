const express = require('express');
const app = express();
const port = 4876; // or any other port you prefer

app.use(express.static('Man.Of.Steel.2013.1080p.Dual.Audio.(HinEng).[MoviesFlix.in].mkv'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/movie.html'); // Path to your HTML file
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
