const express = require('express');

// connect to mongoose when you start the app
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.port || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// tell mongoose what database to connect to 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`✨ Server is listening on PORT: ${PORT}`));