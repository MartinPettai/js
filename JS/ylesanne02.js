// Ülesanne 1: Kellaaeg
// Oodatav tulemus näiteks: "2:38:59PM"

var tunnid = 2;
var minutid = 38;
var sekundid = 59;
var päevaaeg = "PM";

var aeg = tunnid + ":" + minutid + ":" + sekundid + päevaaeg;
console.log(aeg);

// Ülesanne 2: Tsitaat lause sees

var tsitaat = 'Albert Einstein ütles: "Elu on nagu jalgrattasõit. ' +
    'Et tasakaalus püsida, pead sa liikuma."';

console.log(tsitaat);

// Ülesanne 3: Mallide kasutamine
// Oodatav tulemus näiteks: "Jüri Jurakas nimetähed on J.J."

var eesnimi = "Jüri";
var perenimi = "Jurakas";

var nimetähed = `${eesnimi} ${perenimi.charAt(0)}.${perenimi.charAt(0)}.`;
console.log(nimetähed);

// Ülesanne 4: Perenime pikkus

var nimi = "Jurakas, Jüri";
var komaAsukoht = nimi.indexOf(",");
var perenimi = nimi.substring(0, komaAsukoht).toUpperCase();
console.log(perenimi);
console.log("Perenime pikkus: " + perenimi.length);

// Ülesanne 5: E-posti aadressi muutmine

let epost = "karrolk@netlog.com";
let uusEpost = epost.replace("netlog.com", "gmail.com");
console.log(uusEpost);

// Ülesanne 6: Andmerida analüüs

var andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
var andmed = andmerida.split(",");

var ipAadress = andmed[5];
var emailiKasutajanimi = andmed[3].split("@")[0];

console.log("IP-aadress: " + ipAadress);
console.log("Emaili kasutajanimi: " + emailiKasutajanimi);
