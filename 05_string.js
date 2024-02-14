// const str1 = "Ashfak";
// const str2 = "Mahbub";
// console.log(str1);
// console.log(`My name is ${str1} ${str2}`);

// const str3 = Symbol("Mahi");
// const str4 = String(str3)
// console.log(`My last name is ${str4}`);

// const str5 = str1 + str2;
// console.log(str5.length);

// const str6  ="Ashfak Mahbub Mahi";
// console.log(`Lenght of my name ${str6.length}`);
// console.log(str6.charAt(str6.length - 2));
// console.log(str6.slice(-7, -1));
// console.log(str6.slice(-5,10));
// console.log(str6.at(-2));

/**
 *? Split
 * */

// function splitString(stringToSplit, separator) {
//   const arrayOfStrings = stringToSplit.split(separator);
//   console.log("The original string is: ", stringToSplit);
//   console.log("The separator is: ", separator);
//   console.log(
//     "The array has",
//     arrayOfStrings.length,
//     " elements",
//     arrayOfStrings.join("/")
//   );
// }
// const tempestString = "Oh brave new world that has such people in it.";
// const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const space = " ";
// const comma = ",";

// splitString(tempestString,space);
// splitString(tempestString);
// splitString(monthString,comma);


const a ="abcdefg";

function removeLastThree(str){
  return str.slice(0,- 3);
}
console.log(removeLastThree(a));

// console.log(a)