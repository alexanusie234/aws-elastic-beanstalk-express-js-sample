const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Alex will be an excellent Devops Engineer for your organization'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
