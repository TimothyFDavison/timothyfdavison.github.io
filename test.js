const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/.well-known/jwks.json', (req, res) => {
    const jwks = fs.readFileSync(path.join(__dirname, 'jwks.json'), 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(jwks);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
