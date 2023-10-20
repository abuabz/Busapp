const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abuabz:mongodbabu@cluster0.ucqs1tc.mongodb.net/USERLOGIN?retryWrites=true&w=majority') //db connection

const Schema = mongoose.Schema

const BusSchema = new Schema({
    BusNumber:{type:String,required:true },
    BusImage:{type:String,required:true},
    Stime:{type:String,required:true},
    Etime:{type:String,required:true},
    Departure:{type:String,required:true},
    Destination:{type:String,required:true}



})
 var Busdata = mongoose.model('bus_Table',BusSchema) //model creation

 module.exports=Busdata;

