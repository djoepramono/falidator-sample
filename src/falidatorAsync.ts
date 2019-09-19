import { runAsyncValidations, AsyncValidate } from "@codeallnight/falidator";
import { Invalid, InvalidOr } from "@codeallnight/falidator/dist/models"

interface Person {
    name: string;
    age: number;
}

const isAllowed = async (person: Person): Promise<InvalidOr<Person>> => {
    const allowed = (person.name === 'Banned') ? new Invalid("Must not be in the banned list") : person;
    return allowed;
};

const eighteenOrAbove: AsyncValidate<Person> = async (person: Person) => {
    return (person.age >= 18) ? person : new Invalid("Must be 18 or above");
}

const nonEmptyName: AsyncValidate<Person> = async (person: Person) => {
    return  (person.name !== "") ? person : new Invalid('Name cannot be empty')
}

const joe: Person = { name: "Banned", age: 4 }

const result = runAsyncValidations<Person>([eighteenOrAbove, nonEmptyName, isAllowed], joe)
    .then(console.log)
    .catch(console.error);

console.log(runAsyncValidations<Person>([eighteenOrAbove, nonEmptyName, isAllowed], joe));