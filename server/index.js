const express = require('express');
const userRouter = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/person', userRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hejsa fra min Express App" });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

const mongoose = require('mongoose');

const db = mongoose.connect("mongodb://admin:password@localhost:27017/H5Node", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response) => {
    console.log('Connected to the database...');
    return response;
}).catch(err => {
    console.log(err);
})