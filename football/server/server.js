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
    email: String,
    password: String
})
const LoginModel = mongoose.model("logins", loginSchema)
var loginModelInstance = new LoginModel({ email: "belete", password: "1234" })
// firestlogin.save(function (err) {
//     console.log('saved')
// })



const OrderSchema = new Schema({
    fullname: String,
    adress: String,
    city: String,
    country: String,
    phone: String
})
const OrderModel = mongoose.model("order", OrderSchema)

const cardeSchema = new Schema({
    nameoncarde: String,
    nemberoncarde: String,
    date: String,

})
const CardeModel = mongoose.model("carde", cardeSchema)


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password, "obed")
    LoginModel.findOne({ email }, function (err, result) {
        if (result == null) {
            res.send({ failed: 'user not found' })
            console.log('user not found')
        }
        if (result != null) {
            if (result.password === password) {
                res.send({ success: 'logged' })
                console.log(result)
            }
        }
        if (err) {
            console.error(err)
        }
    });
})

app.post("/orderpage", (req, res) => {
    console.log(req.body.inputs)
    const { fullname, adress, city, countery, phonenumber } = req.body.inputs;
    var orderSave = new OrderModel({ fullname: fullname, adress: adress, city: city, country: countery, phone: phonenumber })
    orderSave.save(function (err) {
        if (err) {
            console.error(err)
        }
        res.send({ success: true })
        console.log('saved')
    })


})
app.post("/cardpage", (req, res) => {
    console.log(req.body.inputs)
    const { nameoncarde, numbercarde, date } = req.body.inputs;
    var cardeSave = new CardeModel({ nameoncarde: nameoncarde, numbercarde: numbercarde, date: date, })
    cardeSave.save(function (err) {
        if (err) {
            console.error(err)
        }
        res.send({ success: true })
        console.log('its good')
    })


})
app.post("/newlogin", (req, res) => {
    console.log("im here!!!!!")
    loginModelInstance = new LoginModel(req.body)
    loginModelInstance.save(function (err) {
        if (err) {
            console.error(err)
        }
        console.log('new login save')
        res.send({ success: true })
       
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))