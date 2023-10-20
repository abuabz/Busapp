const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abuabz:mongodbabu@cluster0.ucqs1tc.mongodb.net/USERLOGIN?retryWrites=true&w=majority') //db connection

const Schema = mongoose.Schema

const RegSchema = new Schema({
    LoginId:{type:Schema.Types.ObjectId,ref:"log_table",required:true },
    Userame:{type:String},
    Age:{type:String},
    Place:{type:String},
    Mobile:{type:String},
    Email:{type:String}
})
 var Regdata = mongoose.model('userdata',RegSchema) //model creation

 module.exports=Regdata;