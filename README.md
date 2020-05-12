# Proiect cloud 

In zilele noastre, majoritatea persoanelor atunci cand folosesc o aplicatie isi doresc ca aceasta sa fie personalizata in functie de propriile nevoi, astfel am decis sa realizez o aplicatie de autentificare cu optiunile de login, register, location si Access control folosind tehnologiile Node.js, Express, Passport, Mongoose, EJS, DB si Google Maps API. Astfel, “Passport authentication” permite utilizatorilor crearea unui cont prin completarea unui formular simplist, logarea si vizualizrea hartii cu locatia curenta a utilizatorului. 

## Prezentare API-URI utilizate
Nevoia unei baze de date era absolut necesara, asa ca am ales sa folosesc  Mongo DB. Aceasta este o baza de date NoSql care permite stocare datelor sub forma de JSON si este compatibila cu mediile de lucru de tip Cloud. Id-ul utilizatorului este generat in mod automat, la completarea formularului de inregistrare de catre utlizator am introdus validari precum existenta “@” in cadrul adresei de mail, lungimea parolei mai mare de 6 caractere, verificare coincidere parole. Dupa validarea formularului, un nou user este introdus in baza de date, iar parola sa este criptata.

DataBase URI:

![](https://user-images.githubusercontent.com/44023558/81694998-b4dc4480-946a-11ea-8bb7-dbc1f1331a9b.png)

Criptare parola:
![](https://user-images.githubusercontent.com/44023558/81695005-b60d7180-946a-11ea-9814-3a7e5873e58e.png)

GoogleMaps:



## Descriere arhitectura

##Exemple de request / response

``` 
{
    
}

```
