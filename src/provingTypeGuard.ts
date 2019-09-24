import { Invalid } from "@codeallnight/falidator/dist/models";
import { isInvalid } from "@codeallnight/falidator/dist/typeGuards";

const myInvalid: Invalid = { errorMessage:"Ooops"};
const myOtherInvalid: Invalid = new Invalid("Not valid");

console.log(isInvalid(myInvalid));                  // true
console.log(isInvalid(myOtherInvalid));             // true
console.log(myInvalid instanceof Invalid);          // false
console.log(myOtherInvalid instanceof Invalid);     // true
