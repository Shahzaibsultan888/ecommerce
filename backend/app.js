import express from 'express'
import Product from './routes/productRoute.js';
// import productRoute from './routes/productRoute.js'; 
const app = express();

app.use(express.json())
app.use('/api/v1',Product)

export default app

//route imports

