const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
mongoose
    .connect('mongodb://localhost:27017/sushi-ordering', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
