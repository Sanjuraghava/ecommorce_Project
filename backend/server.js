import express from 'express';
import cors from 'cors';
import { products } from './data/products.js';

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
