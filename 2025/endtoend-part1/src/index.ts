import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
const mongoose = require("mongoose");
const PORT = 8080;
const mongodbDataBaseUrl = "mongodb://127.0.0.1:27017/shop"
import router from './router'

const app = express();

app.use(cors({
  credentials: true
}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Server running on http://localhost:8080/')
})

mongoose.promise = Promise;

mongoose.connect(mongodbDataBaseUrl).then(() => console.log('Connected!'))
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())