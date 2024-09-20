import express from 'express';
import todoRoutes from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:8888', // Your frontend URL
  credentials: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use('/api/todos', todoRoutes);

export default app;