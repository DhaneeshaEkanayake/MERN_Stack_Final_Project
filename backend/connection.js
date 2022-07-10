require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://dhaneesha:dhaneesha123@app.fkafeiq.mongodb.net/app_db?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
