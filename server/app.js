import express from 'express';
import postsRoutes from './routes/posts.routes.js';
import fileUpload from 'express-fileupload';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}));

app.use(postsRoutes);
app.use(express.static(join(__dirname, '../client/build')));

export default app;