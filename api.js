const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

app.listen(process.env.PORT, () =>
    console.log(`Serveur lancé sur port ${process.env.PORT}`)
);
