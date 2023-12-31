require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');

const connectDB=require('./config/db');
connectDB();
app.use(cors({
    origin:"https://mainakdeykol.github.io/sharesave.github.io"
    
}));
app.use(express.json());
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`Server running!!!!!!! on ${PORT}`)
})
