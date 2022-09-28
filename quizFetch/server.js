const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('');

    const usersCollection = db.collection('users');

    const IBMCollection = db.collection('IBMDaily');
    const AAPLCollection = db.collection('AAPLDaily');
    const GOOGLCollection = db.collection('GOOGLDaily');
    const TSLACollection = db.collection('TSLADaily');
    const AMZNCollection = db.collection('AMZNDaily');

    const MSFTCollection = db.collection('MSFTDaily');
    const NVDACollection = db.collection('NVDADaily');
    const METACollection = db.collection('METADaily');
    const WMTCollection = db.collection('WMTDaily');
    const XOMCollection = db.collection('XOMDaily');
    
    
    const IBMRouter = createRouter(IBMCollection);
    const AAPLRouter = createRouter(AAPLCollection);
    const GOOGLRouter = createRouter(GOOGLCollection);
    const TSLARouter = createRouter(TSLACollection);
    const AMZNRouter = createRouter(AMZNCollection);
    
    const MSFTRouter = createRouter(MSFTCollection);
    const NVDARouter = createRouter(NVDACollection);
    const METARouter = createRouter(METACollection);
    const WMTRouter = createRouter(WMTCollection);
    const XOMRouter = createRouter(XOMCollection);
    
    const usersRouter = createRouter(usersCollection);
    
    
    app.use('/api/IBMDaily', IBMRouter);
    app.use('/api/AAPLDaily', AAPLRouter);
    app.use('/api/GOOGLDaily', GOOGLRouter);
    app.use('/api/TSLADaily', TSLARouter);
    app.use('/api/AMZNDaily', AMZNRouter);
    app.use('/api/MSFTDaily', MSFTRouter);
    app.use('/api/NVDADaily', NVDARouter);
    app.use('/api/METADaily', METARouter);
    app.use('/api/WMTDaily', WMTRouter);
    app.use('/api/XOMDaily', XOMRouter);

    app.use('/api/users', usersRouter)
  })
  .catch(console.err);

  app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });