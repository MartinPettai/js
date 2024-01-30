// Ülesanne 5: Temperatuur, Kasutajanime kontroll, Ürituse piletite hind
function kontrolliTemperatuuri() {
    const temperatuur = parseFloat(prompt("Sisesta temperatuur:"));
    if (!isNaN(temperatuur)) {
        if (temperatuur > 25) {
            console.log("Väga kuum ilm!");
        } else if (temperatuur >= 15 && temperatuur <= 25) {
            console.log("Mõnus temperatuur.");
        } else {
            console.log("Jahe ilm.");
        }
    } else {
        console.log("Palun sisesta korrektne temperatuur!");
    }
}

function kontrolliKasutajanime() {
    const kasutajanimi = prompt("Sisesta oma kasutajanimi:");
    if (kasutajanimi.toLowerCase() === "admin") {
        console.log("Tere, administraator!");
    } else {
        console.log("Tere, külaline!");
    }
}

function arvutaPiletiHind() {
    const piletitüüp = prompt("Sisesta piletitüüp (taispilet või sooduspilet):").toLowerCase();
    const vanus = parseInt(prompt("Sisesta oma vanus:"));

    if (piletitüüp === "taispilet") {
        if (vanus < 18) {
            console.log("Pileti hind: 10 eurot");
        } else if (vanus >= 18 && vanus <= 64) {
            console.log("Pileti hind: 20 eurot");
        } else if (vanus >= 65) {
            console.log("Pileti hind: 15 eurot");
        } else {
            console.log("Palun sisesta korrektne vanus!");
        }
    } else if (piletitüüp === "sooduspilet") {
        if (vanus < 18 || vanus >= 65) {
            console.log("Pileti hind: 8 eurot");
        } else if (vanus >= 18 && vanus <= 64) {
            console.log("Pileti hind: 15 eurot");
        } else {
            console.log("Palun sisesta korrektne vanus!");
        }
    } else {
        console.log("Palun sisesta korrektne piletitüüp!");
    }
}

// Testi programmi
kontrolliTemperatuuri();
kontrolliKasutajanime();
arvutaPiletiHind();
