const express = require("express");
const app = express();


const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3080;
app.use(cors());
app.use(express.json());
const session = require('express-session');

const mongoStore = require('connect-mongo');


// get driver connection
const dbo = require("./db/conn");
app.use(session({
  secret: 'topexam',
  resave: false,
  saveUninitialized: true,
  store: mongoStore.create({
    mongoUrl:process.env.URI ,
    touchAfter: 2 * 3600
  })

}));

app.use(require("./routes/examroute"));
// custom 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})
// last app.use calls right before app.listen():
// custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

 
app.listen(port, () => {

  console.log(`Server is running on port: ${port}`);
});
