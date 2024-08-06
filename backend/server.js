const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connect mongodb from config file
connectDB();

//routes
app.use('/api/user', userRoutes);


//server listening
app.listen(5000, () => {
  console.log(`Server is running`);
})