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
    const quizAnswerCollection = db.collection('quiz');

    const songsRouter = createRouter(songsCollection);
    const quizAnswerRouter = createRouter(quizAnswerCollection);
    
    app.use('/api/songs', songsRouter);
    app.use('/api/quiz', quizAnswerRouter);
  })
  .catch(console.err);

  app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });