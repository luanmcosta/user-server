import express from 'express';
import 'dotenv/config'
import bodyParser from "body-parser";
import routes from './routes'
import cors from 'cors';

const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use(routes);

server.listen(process.env.PORT || 3001, ()=> {
    console.log(`Users Server is listening the port: ${process.env.PORT|| 3001}`);
});