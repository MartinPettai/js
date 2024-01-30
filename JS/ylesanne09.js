// Kaks funktsiooni nime väljastamiseks
function minuNimi() {
    console.log("Minu nimi on [Sinu nimi].");
  }
  
  const minuNimiNool = () => {
    console.log("Minu nimi on [Sinu nimi].");
  };
  
  // Argumendiga funktsioon kuupäeva kuvamiseks eesti keeles
  function kuupaevEesti(kuupaev) {
    const date = new Date(kuupaev);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const eestiKuupaev = date.toLocaleDateString('et-EE', options);
    console.log(`Praegune kuupäev eesti keeles: ${eestiKuupaev}`);
  }
  
  // Teadmata hulga täisarvude funktsioon
  const arvudeKeskmine = (...arvud) => {
    const kogusumma = arvud.reduce((sum, arv) => sum + arv, 0);
    const keskmine = kogusumma / arvud.length;
    return { kogusumma, keskmine };
  };
  
  // Noolefunktsioon salajase sõnumi loomiseks
  const salajaneSonum = (sonum) => sonum.replace(/[aeiouAEIOU]/g, '*');
  
  // Noolefunktsioon unikaalsete nimede leidmiseks
  const leiaUnikaalsedNimed = (nimedeMassiiv) => [...new Set(nimedeMassiiv)];
  
  // Käivitame funktsioonid ja kuvame tulemused
  minuNimi();
  minuNimiNool();
  
  kuupaevEesti('19.07.23');
  
  const tulemus = arvudeKeskmine(5, 10, 15, 20);
  console.log(`Kogusumma: ${tulemus.kogusumma}, Keskmine: ${tulemus.keskmine}`);
  
  const algneSonum = "Tere, ma olen salajane!";
  const salajaneVersioon = salajaneSonum(algneSonum);
  console.log(`Algne sõnum: ${algneSonum}`);
  console.log(`Salajane versioon: ${salajaneVersioon}`);
  
  const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
  const unikaalsedNimed = leiaUnikaalsedNimed(nimed);
  console.log("Unikaalsed nimed:", unikaalsedNimed);
  