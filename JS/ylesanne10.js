// Toote objekt
const toode = {
    nimetus: 'Piim',
    hind: 1.20,
    kogus: 5,
    koguHind: function () {
      return this.hind * this.kogus;
    },
    muudaKogust: function (uusKogus) {
      this.kogus = uusKogus;
    },
    kuvaSisu: function () {
      console.log(`Toote nimetus: ${this.nimetus}, Hind: ${this.hind} EUR, Kogus: ${this.kogus}`);
    }
  };
  
  // Kuva toote omadused konsoolis
  console.log("Toote omadused:");
  console.log("Nimetus:", toode.nimetus);
  console.log("Hind:", toode.hind);
  console.log("Kogus:", toode.kogus);
  
  // Kuva meetodite tulemused konsoolis
  console.log("Toote koguhind:", toode.koguHind());
  toode.muudaKogust(8);
  console.log("Muudetud kogus:", toode.kogus);
  toode.kuvaSisu();
  
  // Ostukorvi objekt
  const ostukorv = {
    tooted: [
      { nimi: 'Piim', hind: 3.60, kogus: 2 },
      { nimi: 'Leib', hind: 2.00, kogus: 1 },
      { nimi: 'Munad', hind: 1.50, kogus: 6 },
      { nimi: 'Juust', hind: 4.20, kogus: 1 },
      { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
    ],
    kuvaSisu: function () {
      console.log("Ostukorvi sisu:");
      this.tooted.forEach(toode => console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`));
    },
    lisaToode: function (nimi, hind, kogus) {
      this.tooted.push({ nimi, hind, kogus });
    },
    koguSumma: function () {
      let summa = 0;
      this.tooted.forEach(toode => summa += toode.hind * toode.kogus);
      return summa.toFixed(2);
    }
  };
  
  // Kuva ostukorvi meetodite tulemused konsoolis
  ostukorv.kuvaSisu();
  ostukorv.lisaToode('Kohv', 5.80, 2);
  ostukorv.kuvaSisu();
  console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());
  