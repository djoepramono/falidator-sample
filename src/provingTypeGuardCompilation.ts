import { Validate } from "@codeallnight/falidator";
import { Invalid, InvalidOr } from "@codeallnight/falidator/dist/models";
import { isInvalid } from "@codeallnight/falidator/dist/typeGuards";

const eighteenOrAbove: Validate<Person> = (person) => {
    return (person.age >= 18) ? person : new Invalid("Must be 18 or above");
}

const result: InvalidOr<Person> = eighteenOrAbove({name: "Jim", age: 24});

if (isInvalid(result)) {
    console.error('invalid', result.errorMessage);
} else {
    console.log('valid', result.age);
}