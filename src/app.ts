// src/app.ts
import express from 'express';
import routes from './routes/dataRoutes';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
