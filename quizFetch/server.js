const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('plotify');

    const songsCollection = db.collection('songs');

    const songsRouter = createRouter(songsCollection);

    
    
    app.use('/api/songs', songsRouter);
  })
  .catch(console.err);

  app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });