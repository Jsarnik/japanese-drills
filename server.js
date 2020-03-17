const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser'),
      timeout = require('connect-timeout'),
      mongoConfig = require('./MongoConfig'),
      routes = require('./routes/routes'),
      cardService = require('./mongo/CardService'),
      path = require('path'),
      cors = require('cors');

process.env.UV_THREADPOOL_SIZE = 128;

mongoConfig.MongoConfiguration.Initialize();
const mongoDb = mongoConfig.MongoConfiguration.MongoDb();

let app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(timeout(120000));
app.use(haltOnTimedout);
app.use(express.static(path.join(__dirname,'/app/build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
});

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', `*`);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

routes.configure(app);

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

const httpServer = http.createServer(app),
httpPort = process.env.PORT || 3000;

mongoDb.on('open', ()=> {
    isDBInit = true;
    console.log('MongoDB connected');
});

mongoDb.on('close', ()=> {
    mongoConfig.MongoConfiguration.Initialize();
    isDBInit = false;
    console.log('MongoDB close');
});

mongoDb.on('error', (err)=> {
    isDBInit = false;
    console.log('MongoDB connection error:');
    console.log(err.message);
});

httpServer.listen(httpPort, (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log(`Node App Started on port ${httpPort}`);
        cardService.CardService.InitialData();
    }
});