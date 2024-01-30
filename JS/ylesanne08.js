const mündid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
const uuedMündid = [];
let müntideSumma = 0;
let müntideArv = 0;

while (mündid.length > 0) {
  const mündiVäärtus = mündid.pop();
  
  if (mündiVäärtus <= 2) {  // Näide: võtame ainult mündid, mille väärtus on 2 või väiksem
    uuedMündid.push(mündiVäärtus);
    müntideSumma += mündiVäärtus;
    müntideArv++;
  }
}

console.log(`Said kokku ${müntideArv} münti, mille summa on ${müntideSumma.toFixed(2)} eurot.`);
console.log("Uued mündid:", uuedMündid);
