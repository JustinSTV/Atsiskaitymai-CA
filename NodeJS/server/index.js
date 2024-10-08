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

app.get('/allBooks', async (req, res) => {
  const settings = {
    filter: {},
    order: {},
    skip: 0,
    limit: 10,
  };

  console.log('Query parameters:', req.query);

  Object.keys(req.query).forEach(key => {
    const keyValue = key.split('_')[0]; //? sort arba filter
    if (keyValue === 'sort') {
      //?pasiemu sort
      //? 1 = asc, -1 desc
      settings.order = { [key.split('_')[1]]: Number(req.query[key]) } 
      console.log('sorting', settings.order = { [key.split('_')[1]]: Number(req.query[key]) })
    }

  });

  console.log("apply'inti settings", settings);

  const client = await MongoClient.connect(CONNECT_URL);

  const data = await client.db('atsiskaitymas').collection('books').aggregate([
    Object.keys(settings.order).length ? { $sort: settings.order } : { $sort: { title: 1 } },
    { $skip: settings.skip },
    { $limit: settings.limit },
  ]).toArray();

  res.send(data);
  client.close();
});
