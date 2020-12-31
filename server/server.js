const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

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

const port = proces.env.PORT || 4000;

// Production path to React App
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})