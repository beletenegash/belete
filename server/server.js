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

const url = "mongodb://localhost:27017/belete";
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
app.post('/login',(req,res)=>{
const { email, password }= req.body;

console.log(email,password, "obed")

LoginModel.findOne({email:"belete"}, (err, docs) => {
    if (err) throw err;
   
    console.log(docs)
    if (docs.email ) {
        res.send({ ok: true }); 
    }
    else {
       alert('email or paswoorde not true')
    }
})
})



app.listen(port,()=>{(
    console.log('data work')

)})