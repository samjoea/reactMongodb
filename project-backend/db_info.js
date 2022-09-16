import https from 'https'
import mongoose from "mongoose";

//Define schema
const Schema = mongoose.Schema;

const api_Info = new Schema ({
    API: String,
    Description: String,
    Link: String,
    HTTPS: Boolean,
    Auth: String,
    Cors: String,
    Category: String
});
const db_model = mongoose.model('entries',api_Info);

// Getting data from api
const url = 'https://api.publicapis.org/entries';
const apiData = () => {
    https.get(url, (res) => {
        let body = "";
        res.on('data', (chunk) => body += chunk);
        res.on('end', async () => {
            try {
                let json = JSON.parse(body);
                //console.log(json)
                const collectionData = json.entries;
                await collectionData.map((arr) => {
                    const data = new db_model({...arr});
                    data.save();
                });
                mongoose.connection.collection('entries').countDocuments((err, res) => {
                    console.log(res, ' Documents inserted into entries Collection');
                })

            } catch (error) {
                console.error(error.message);
            };
        }).on('error', (error) => console.error(error.message));
    });
}

export default apiData;