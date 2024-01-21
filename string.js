const str1 = "Ashfak";
const str2 = "Mahbub";
console.log(str1);
console.log(`My name is ${str1} ${str2}`);

const str3 = Symbol("Mahi");
const str4 = String(str3)
console.log(`My last name is ${str4}`);

const str5 = str1 + str2;
console.log(str5.length);

const str6  ="Ashfak Mahbub Mahi";
console.log(`Lenght of my name ${str6.length}`);
console.log(str6.charAt(str6.length - 2));
console.log(str6.slice(-7, -1));
console.log(str6.slice(-5,10));
console.log(str6.at(-2));
