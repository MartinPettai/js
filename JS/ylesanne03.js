// Ülesanne 1: Sõidu aeg ja kaugus
let soiduKaugus = 150; // kilomeetrites
let kiirus = 60; // kilomeetrites tunnis

// Arvutame sõidu aja (tunnid)
let soiduAeg = soiduKaugus / kiirus;

// Kuva tulemus konsoolis
console.log("Sõidu aeg:", soiduAeg, "tundi");

// Ülesanne 2: Postituste kuvamine
let postitusteArv = 137;
let postitusteLehtedeArv = Math.ceil(postitusteArv / 10); // Ümarda üles järgmise täisarvuni

// Lehekülgede ja postituste arvud konsoolis
console.log("Lehekülgede arv:", postitusteLehtedeArv);
console.log("Viimasel lehel postituste arv:", postitusteArv % 10);

// Ülesanne 3: Serveri töökulu
let serveriVoimsus = 400; // vattides
let elektriHind = 0.0969; // eurod/kWh

// Arvutame serveri voolutarbimise kilovatt-tundides (kWh)
let voolutarbimine = serveriVoimsus / 1000;

// Arvutame töökulu eurodes
let tookulu = voolutarbimine * elektriHind;

// Kuva tulemus konsoolis
console.log("Serveri töökulu ühe tunni jooksul:", tookulu.toFixed(2), "eurot");
