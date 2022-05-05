const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./db/connectDB');
require('dotenv').config();

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
