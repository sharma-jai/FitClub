const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserController = require('./controller/UserController')

const app = express();
const port = process.env.port || 8000;

app.use(cors())
app.use(express.json())


if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

app.post('/register', UserController.store)

try {
	mongoose.connect(process.env.MONGO_DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}

app.listen (port, ()=> {
    console.log(`Listening on ${port}`)
})