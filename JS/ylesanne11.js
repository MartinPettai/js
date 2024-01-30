// Ülesanne 11 - Nimed, Sünniaeg ja vanus, Kaugushüpe

// Nimed
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// Korrektsete nimede loomine
const korrektsedNimed = nimed.map(nimi => {
  const nimedeOsad = nimi.split(" ");
  const korrektneNimi = nimedeOsad.map(osa => osa.charAt(0).toUpperCase() + osa.slice(1).toLowerCase()).join(" ");
  return korrektneNimi;
});

console.log("Korrektsed nimed:", korrektsedNimed);

// Emailide loomine
const emailid = nimed.map(nimi => {
  const perenimi = nimi.split(" ")[1].toLowerCase();
  return `${perenimi}@metshein.com`;
});

console.log("Emailid:", emailid);

// Funktsioon otsimiseks
function otsiNime(nimi) {
  const leitudNimed = nimed.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
  if (leitudNimed.length > 0) {
    console.log("Leitud nimed:", leitudNimed);
  } else {
    console.log("Nime ei leitud.");
  }
}

otsiNime("Jaan");

// Sünniaeg ja vanus
const inimesteAndmed = [
  { nimi: "Mari Maasikas", isikukood: "38705123568" },
  { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
  { nimi: "Kristiina Kukk", isikukood: "39203029876" },
  { nimi: "Margus Mustikas", isikukood: "49807010346" },
  { nimi: "Jaak Järve", isikukood: "39504234985" },
  { nimi: "Kadi Kask", isikukood: "39811136789" },
  // Lisa kontrollimiseks oma nimi ja isikukood
];

inimesteAndmed.forEach(isik => {
  const sünniaeg = isik.isikukood.slice(5, 7) + "." + isik.isikukood.slice(3, 5) + ".19" + isik.isikukood.slice(1, 3);
  const vanus = new Date().getFullYear() - parseInt("19" + isik.isikukood.slice(1, 3), 10);
  console.log(`${isik.nimi} - Sünniaeg: ${sünniaeg}, Vanus: ${vanus} aastat`);
});

// Kaugushüpe
const opilased = [
  { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
  { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
  { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
  { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
  { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
  { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
  { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
  { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
  { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
  { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

opilased.forEach(opilane => {
  const parimTulemus = Math.max(...opilane.tulemused);
  const keskmineTulemus = opilane.tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / opilane.tulemused.length;
  console.log(`${opilane.nimi} - Parim tulemus: ${parimTulemus}, Keskmine tulemus: ${keskmineTulemus.toFixed(2)}`);
});
