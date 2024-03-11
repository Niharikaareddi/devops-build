const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

// Serving the static files from the 'build' directory
app.use(express.static(path.join(__dirname)));

// Defining the route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
