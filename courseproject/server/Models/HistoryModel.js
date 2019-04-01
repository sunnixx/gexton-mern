const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = new Schema({
    pid: {type:String},
    uid: {type:String, unique: true}
})

module.exports = mongoose.model('History',HistorySchema)