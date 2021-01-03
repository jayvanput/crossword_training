const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Set up middleware
const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.ATLAS_URI;
const dbName = 'clues'

MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected successfully to db");
        const db = client.db(dbName);
        const cluesCollection = db.collection('clues')

        // Routes
        app.get('/api/', (req, res) => {
            let days = req.query.days
            let start_date = req.query.start_date
            let end_date = req.query.end_date

            const query = { day: "Monday" }
            cluesCollection.find(query).toArray()
                .then(arr => {
                    const rand_idx = Math.floor(Math.random() * arr.length)
                    console.log(arr[rand_idx])
                    return arr[rand_idx]

                })
                .then(value => {
                    res.json(value)
                })
        })
        // app.post()
        // app.put()
        // app.delete()
    })

const port = process.env.PORT || 4000;



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