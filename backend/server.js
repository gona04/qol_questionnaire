const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const { qualityOfLife } = require('./data/qol-data'); // Load qol-data.js
const analysisRoutes = require('./routes/analysis-routes'); // Load analysis-routes.js

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', async(req,res) => {
    console.log('I am running')
})

// Use the new analysis routes
app.use('/', analysisRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
