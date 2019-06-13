const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const yargs = require('yargs');
const cors = require('cors');
const arguments = yargs.argv._


console.log(arguments)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const url = "mongodb://localhost:27017/elete";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB!');
});
const Schema = mongoose.Schema;
const loginSchema = new Schema({
    email:String,
    password: String
})
const LoginModel = mongoose.model("login",loginSchema)
var firestlogin = new LoginModel ({email:"belete",password:"1234"})
firestlogin.save(function(err){
    console.log('saved')
})
app.post("/login",(req,res)=>{
const{email,password}=req.body;
console.log(email,password, "obed")
LoginModel.findOne({ email }, function (err, result) {
    if(result === null){
        res.send({failed:'user not found'})
        console.log('user not found')
    }
    if(result !== null){
        if(result.password === password){
            res.send({success:'logged'})
            console.log(result)
        }
    }
    if(err){
        console.error(err)
    }
});
})



app.listen(port,()=>{(
    console.log('data work')

)})