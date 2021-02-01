const express = require('express');
const app = express();
const mongoose = require('mongoose');


//routes
const authRoutes = require('./routes/auth');

//MongoDB connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.fkuer.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => { 
    console.log('Database connection successful');
});


app.use(express.json());
app.use('/api', authRoutes);

app.listen(5000, () => {
    console.log(`Server is running on 5000`)
});
