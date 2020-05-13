# Proiect cloud 

In zilele noastre, majoritatea persoanelor atunci cand folosesc o aplicatie isi doresc ca aceasta sa fie personalizata in functie de propriile nevoi, astfel am decis sa realizez o aplicatie de autentificare cu optiunile de login, register, location si Access control folosind tehnologiile Node.js, Express, Passport, Mongoose, EJS, DB si Google Maps API. Astfel, “Passport authentication” permite utilizatorilor crearea unui cont prin completarea unui formular simplist, logarea si vizualizrea hartii cu locatia curenta a utilizatorului. 

## Prezentare API-URI utilizate
Nevoia unei baze de date era absolut necesara, asa ca am ales sa folosesc  Mongo DB. Aceasta este o baza de date NoSql care permite stocare datelor sub forma de JSON si este compatibila cu mediile de lucru de tip Cloud. Id-ul utilizatorului este generat in mod automat, la completarea formularului de inregistrare de catre utlizator am introdus validari precum existenta “@” in cadrul adresei de mail, existenta unui cont asociat deja cu e-mail-ul specificat, lungimea parolei mai mare de 6 caractere, verificare coincidere parole. Dupa validarea formularului, un nou user este introdus in baza de date, iar parola sa este criptata.

DataBase URI:

Pentru a stoca userii mi-am facut cont pe MongoDb si am creat o baza de date NoSql. Prin intermediul URI-ului am facut legatura intre aplicatie si baza de date cloud.
![](https://user-images.githubusercontent.com/44023558/81694998-b4dc4480-946a-11ea-8bb7-dbc1f1331a9b.png)

Criptare parola:
![](https://user-images.githubusercontent.com/44023558/81695005-b60d7180-946a-11ea-9814-3a7e5873e58e.png)

GoogleMaps:
Pentru a afisa harta am folosit Google Platform Cloud pentru a genera un API key pe care ulterior l-am integrat in aplicatie.
![](https://user-images.githubusercontent.com/44023558/81701978-5ff0fc00-9473-11ea-9c6e-3b506efd6ab0.png)

## Descriere arhitectura

Aplicatia prezinta formular de login, register respectiv vizualizare harta cu locatie. Un utilizator nou completeaza formularul, iar daca datele trec de validarile impuse acesta isi creaza un nou cont prin intermediul caruia ulterior se poate autentifica si vizualiza harta impreuna cu locatia curenta. 

![](https://user-images.githubusercontent.com/44023558/81695050-bf96d980-946a-11ea-9a56-fdef98c0f658.png)
![](https://user-images.githubusercontent.com/44023558/81695046-bf96d980-946a-11ea-8908-8e0760185cff.png)
![](https://user-images.githubusercontent.com/44023558/81695041-be65ac80-946a-11ea-9edf-569ff1d963a7.png)
##Exemple de request / response (GET, POST)
``` 
{
    //Login handle
    router.post('/login', (req, res, next) =>{
   passport.authenticate('local', {
    successRedirect: '/dashbord',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

//connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDb Connected..."))
.catch(err => console.log(err));

//Dashbord
router.get('/dashbord' , ensureAuthenticated, (req, res) => 
    res.render('dashbord', {
        name: req.user.name
    }));
    
    //Login Page
router.get('/login' , (req, res) => res.render('login'));

//Register Page
router.get('/register' , (req, res) => res.render('register'));

//script
router.get('/script', (req, res) => res.render('script'));


{"name":"alex"
"email":"alexiosa@gmail.com"
"password":"$2b$10$dZEvw9eZBGx5epT/KOSjz.s7UmINZW8DH.45OlPvtRx9mLwYoSXtK"
}
{
"name":"ayline"
"email":"aylineayline@gmail.com"
"password":"$2b$10$doxmlWj0DcZnuHAbW2VV7On.N259tKUOI7vgoFAC0crZYtvDWvEM6"
}
}
```
