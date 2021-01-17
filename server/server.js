const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path')

const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
require('dotenv').config();

// Set up middleware
const app = express();
//app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.ATLAS_URI;
const dbName = 'Crosswordese'

MongoClient.connect("mongodb+srv://jvp119:Thequickbrownfox1!@cluster0.2yvlj.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected successfully to db");

        // Routes
        app.get('/api', (req, res) => {
            let day = req.query.day
            let db_name = req.query.db_name
            const db = client.db(db_name);
            const cluesCollection = db.collection(day)
            cluesCollection.aggregate([{ $sample: { size: 1 } }]).toArray()
                .then(arr => {
                    if (arr.length === 0) {
                        res.json({
                            _id: "5ff140e1b4bd587341841c55",
                            id: 5708,
                            date: '1994-04-18',
                            day: 'Monday',
                            number: '25A',
                            clue: 'Date range is too small!',
                            answer: '_'
                        })
                    }
                    const rand_idx = Math.floor(Math.random() * arr.length)
                    return arr[rand_idx]
                })
                .then(value => {
                    res.json(value)
                })
        })
        // app.post()
        // app.put()
        app.delete('/api', (req, res) => {
            day = req.query.day
            const cluesCollection = db.collection(day)
            object_id = req.query.id
            cluesCollection.deleteOne({
                "_id": ObjectId(req.query.id)
            }).then(response => {
                res.send("Ok")
            })
        })
    })

const port = process.env.PORT || 4000;
// Production path to React App
if (process.env.NODE_ENV === "production") {

    app.use(express.static('client/build'));

    app.get('/^((?!(api)).)*$/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})