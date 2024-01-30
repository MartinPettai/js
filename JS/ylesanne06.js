// Ülesanne 6: Positiivne või negatiivne
function kontrolliPositsiooni() {
    const number = parseFloat(prompt("Sisesta number:"));
    if (!isNaN(number)) {
        switch (Math.sign(number)) {
            case 1:
                console.log("Number on positiivne.");
                break;
            case -1:
                console.log("Number on negatiivne.");
                break;
            case 0:
                console.log("Number on null.");
                break;
            default:
                console.log("Vale sisend!");
        }
    } else {
        console.log("Palun sisesta arv!");
    }
}

// Testi programmi
kontrolliPositsiooni();

// Restoran
function kontrolliBroneeringut() {
    const broneering = parseInt(prompt("Sisesta broneeringu arv:"));
    if (!isNaN(broneering)) {
        switch (true) {
            case broneering >= 1 && broneering <= 2:
                console.log("Valige laud kahele inimesele.");
                break;
            case broneering >= 3 && broneering <= 4:
                console.log("Valige laud neljale inimesele.");
                break;
            case broneering >= 5 && broneering <= 6:
                console.log("Valige laud kuuele inimesele.");
                break;
            case broneering > 6:
                console.log("Valige suur laud.");
                break;
            default:
                console.log("Vale sisend!");
        }
    } else {
        console.log("Palun sisesta arv!");
    }
}

// Testi programmi
kontrolliBroneeringut();
