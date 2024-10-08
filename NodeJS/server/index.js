import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import 'dotenv/config';

const CONNECT_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER_NAME}.${process.env.DB_CLUSTER_ID}.mongodb.net/`
const PORT = process.env.SERVER_PORT;

const app = express();
const corsOptions = {
  origin: `http://localhost:${process.env.FRONT_PORT}`
}

app.use(express.json());
app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));