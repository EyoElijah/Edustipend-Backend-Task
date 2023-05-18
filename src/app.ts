import * as express from 'express';
import postRoute from './routes/posts.route';
import commentRoute from './routes/comments.route';
import { config } from 'dotenv';

config();

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', postRoute, commentRoute);

const port = process.env.PORT || 3000;
const BASE_API = process.env.BASE_API || 'localhost';

app.listen(port, () => console.log(`server is running at ${BASE_API}:${port}`));
