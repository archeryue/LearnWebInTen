import express from 'express';
import todoRoutes from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:8888', // Your frontend URL
  credentials: true,
  methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
  allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
}));

app.use(express.json());
app.use('/api/todos', todoRoutes);

export default app;