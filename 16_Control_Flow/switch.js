// switch (value){
//     case value:

//     break;

//     default:

//     break;
// }

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
  // break; //* if we don't put break after the checking a case it will execute the following cases without checking but it won't execute the default case
  case 3:
    console.log("April");
    break;
  default:
    console.log("default");
    break;
}
