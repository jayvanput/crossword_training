const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Set up middleware
//app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
//app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({
        foo: "baz"
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})