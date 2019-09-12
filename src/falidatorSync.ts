import { runValidations, Validate } from "@codeallnight/falidator";
import { Invalid, InvalidOr } from "@codeallnight/falidator/dist/models";

const eighteenOrAbove: Validate<Person> = (person) => {
    return (person.age >= 18) ? person : new Invalid("Must be 18 or above");
}

const nonEmptyName = (person: Person): InvalidOr<Person> => {
    return  (person.name !== "") ? person : new Invalid('Name cannot be empty')
}

const joe: Person = { name: "", age: 4 }

console.log(runValidations([eighteenOrAbove, nonEmptyName], joe));