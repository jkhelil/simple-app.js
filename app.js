const express = require('express');
const app = express();
const port = 8080;
app.listen(port, () => {
console.log('listening for request on port 8080');
});
app.get('/', (req, res) => {
console.log('request made');
res.sendFile("./docs/index.html", { root: __dirname })
});
app.get('/about', (req, res) => {
res.sendFile('./docs/about.html', { root: __dirname });
});
app.get('/about-us', (req, res) => {
res.redirect('/about');
});
app.use((req, res) => {
res.status(404).sendFile('./docs/404.html', { root: __dirname });
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down...');
  });