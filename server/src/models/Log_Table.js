const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abuabz:mongodbabu@cluster0.ucqs1tc.mongodb.net/USERLOGIN?retryWrites=true&w=majority') //db connection

const Schema = mongoose.Schema

const LogSchema = new Schema({
    Username:{type:String},
    Password:{type:String},
    Role:{type:String}

})
 var Logdata = mongoose.model('log_table',LogSchema) //model creation

 module.exports=Logdata;

