// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":

for (let i = 1; i <= 15; i++) {
  if (i > 5) {
    console.log("didia 5-ze");
  } else {
    console.log(i);
  }
}

// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:

let nomrebi = [3, 6, 9, 12, 15];
for (let num of nomrebi) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:

let rame = "sigma";
for (let char of str) {
  console.log(char);
  if (char === "a") {
    console.log("gamoiwira 'a'");
  }
}

// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:

let colors = ["red", "green", "blue", "yellow"];
for (let color of colors) {
  if (color.length > 5) {
    console.log(color);
  }
}

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":

for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i + " - sheidzleba gaiyos 7-ze");
  }
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:

let ricxvebi = [4, 8, 12, 16, 20];
for (let number of ricxvebi) {
  console.log(number * 2);
}

// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';
// for (let i = 0; i < word.length; i++))

let sityva = "javascript";
for (let i = 0; i < sityva.length; i++) {
  if (sityva[i] === "j") {
    break;
  }
  console.log(sityva[i]);
}

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:

let cifri = [5, 10, 15, 20, 25];
for (let number of cifri) {
  if (number % 5 === 0) {
    console.log(number);
  }
}

// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':

let str = "hello world";
for (let char of str) {
  if (char === "o") {
    continue;
  }
  console.log(char);
}

// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:

let nomeroUno = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let number of nomeroUno) {
  if (number % 2 === 0) {
    sum += number;
  }
}
console.log(sum); // 12 (2 + 4 + 6)

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100
// )

for (let i = 1; i <= 10; i++) {
  console.log(`10 x ${i} = ${10 * i}`);
}

// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:

let Davigale = [2, 7, 4, 9, 5];
for (let number of Davigale) {
  if (number > 4) {
    console.log(number * 3);
  } else {
    console.log(number);
  }
}

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი
// ტექსტის დაბეჭდვა:

for (let i = 1; i <= 30; i++) {
  if (i > 10) {
    console.log(i + " - მეტია 10-ze");
  } else {
    console.log(i);
  }
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:

let word = "frontend";
for (let char of word) {
  if (char === "e") {
    console.log("vipovet e");
    break;
  }
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:

let numbers = [100, 200, 300, 400, 500];
for (let number of numbers) {
  if (number < 250) {
    console.log(number);
  }
}
