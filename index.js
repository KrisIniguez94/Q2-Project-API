const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const carRoutes = require('./routes/cars');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/cars', carRoutes);

app.listen(PORT, () => {
  console.log(`Car Garage: Listening on port  no. ${PORT}`);
});

module.exports = app;
