const express = require("express");
const expressLayouts = require("express-ejs-layouts"); 
const mongoose=require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport=require('passport');

const app=express();

//Passport config
require("/home/ubuntu/environment/config/passport")(passport);

//DB confıg
const db = require("/home/ubuntu/environment/config/keys").MongoURI;

//connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDb Connected..."))
.catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

//Express sesion
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));
  
  //Connect flash
//app.use(flash());
  
  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//Global var
app.use((req, res, next) =>{
   res.locals.succes_msg = req.flash('succes_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   next();
});

//Routes
app.use('/' , require("/home/ubuntu/environment/routes/index"));
app.use('/users' , require("/home/ubuntu/environment/routes/users"));
//app.use('/script', require("/home/ubuntu/environment/views/script"));

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log("Server started on port ${PORT}"));