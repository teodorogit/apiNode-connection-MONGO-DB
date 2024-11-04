import express from 'express'
import http from 'http';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router/authentication';


const app = express();

app.use(express.json());
app.use('/auth', router);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app)

server.listen(8080, () => {
    console.log('Server running on port http://localhost:8080/')
})

const MONGO_URL =  'mongodb+srv://teodoro:teodoro@cluster0.ra3hq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log('123', error));



