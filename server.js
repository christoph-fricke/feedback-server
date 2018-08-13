const express = require('express');
const path = require('path');

const app = express();

// Server static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.listen(3000, () => console.log('Server running on port 3000'));
