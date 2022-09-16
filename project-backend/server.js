//importing
import express from 'express'
import mongoose from 'mongoose'
import apiData from './db_info.js';

//app config
const app = express();
app.use(express.json());

//MongoDB connections
const connectDB = async () => {
    try {
        const db_connection_uri = 'mongodb+srv://new_user1:xEFyLb1r8GsUthFf@cluster0.q4prcr2.mongodb.net/learning?retryWrites=true&w=majority';
        const conn = await mongoose.connect(db_connection_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected on: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}
connectDB()

// Checks for collection entries
const dB = mongoose.connection;
const db_collections = dB.modelNames();

dB.collection('entries').countDocuments((err, res) => {
    if (res === 0) {
        apiData();
    } else {
        console.log(res, ' Documents in entries Collection')
    }
})

// Display on success
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});