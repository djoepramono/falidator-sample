import { Validate, Invalid, InvalidOr, isInvalid } from "@codeallnight/falidator";

const eighteenOrAbove: Validate<Person> = (person) => {
    return (person.age >= 18) ? person : new Invalid("Must be 18 or above");
}

const result: InvalidOr<Person> = eighteenOrAbove({name: "Jim", age: 24});

if (isInvalid(result)) {
    console.error('invalid', result.errorMessage);
} else {
    console.log('valid', result.age);
}