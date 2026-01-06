import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import contactRouter from './routes/contactRoute.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://inovix.com.au',
    'https://www.inovix.com.au'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('API is running');
})

app.use('/api/contact', contactRouter);

app.listen(port, () => console.log("Server started", port))