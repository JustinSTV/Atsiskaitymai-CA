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

  console.log('parameters:', req.query);

  if (Object.keys(req.query).length) {
    Object.keys(req.query).forEach(key => {
      const keyValue = key.split('_')[0]; //? sort arba filter
      // 1 = asc
      //  2 = dsec
      if (keyValue === 'sort') {
        settings.order = { [key.split('_')[1]]: Number(req.query[key]) };
      } else if (keyValue === 'filter') {
        if (!key.split('_')[2]) {
          settings.filter[key.split('_')[1]] = { $regex: new RegExp(req.query[key], 'i') };
        } else {
          const option = '$' + key.split('_')[2];
          if (!settings.filter[key.split('_')[1]]) {
            if (key.split('_')[1] === 'genres') {
              settings.filter[key.split('_')[1]] = { $in: req.query[key].split(',') };
            } else {
              settings.filter[key.split('_')[1]] = { [option]: Number(req.query[key]) };
            }
          } else {
            settings.filter[key.split('_')[1]][option] = Number(req.query[key]);
          }
        }
      }
    });
  }

  if (req.query.page) {
    const page = Number(req.query.page);
    settings.skip = (page - 1) * settings.limit;
  }

  console.log("apply'inti settings", settings.filter);

  const client = await MongoClient.connect(CONNECT_URL);
  const data = await client.db('atsiskaitymas').collection('books').aggregate([
    Object.keys(settings.order).length ? { $sort: settings.order } : { $sort: { publishDate: -1} },
    { $skip: settings.skip },
    { $limit: settings.limit },
  ]).toArray();

  // console.log('data returned: ', data)

  client.close();
  res.status(200).send(data);
});
