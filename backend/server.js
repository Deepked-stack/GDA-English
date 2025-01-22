import bodyParser from 'body-parser';
import express from 'express';
import authRoutes from './routes/authrouter.js';  // Notice the .js extension
import mainRoutes from './routes/mainrouter.js';  // Notice the .js extension
import progressRoutes from './routes/progressRouter.js';  // Notice the .js extension

import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, server!');
});
app.use('/api', authRoutes);
app.use('/api', mainRoutes);
app.use('/api', progressRoutes);

const PORT = process.env.PORT || 5000;
const host = '0.0.0.0'; // Or your machine's local IP address

// Pass host and port to app.listen
app.listen(PORT, host, () => {
  console.log(`Server is Running on http://${host}:${PORT}`);
});
