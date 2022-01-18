const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();

//cross origin policy
app.use(cors())
// Bodyparser Middleware
app.use(express.json());

// Use Routes
app.use('/api/graphql', require('./routes/api/Titles'));
app.use('/api/titles', require('./routes/api/Movie'));

const port = 5000;

app.listen(port,() => console.log(`Server started on port ${port}`));