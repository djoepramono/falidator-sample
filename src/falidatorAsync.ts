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
    if (person.age >= 18) {
        return person
     } else {
        throw Error("Must be 18 or above");
     } 
}

const nonEmptyName: AsyncValidate<Person> = async (person: Person) => {
    return  (person.name !== "") ? person : Promise.reject('Name cannot be empty')
}

const joe: Person = { name: "Banned", age: 4 }

const result = runAsyncValidations<Person>([eighteenOrAbove, nonEmptyName, isAllowed], joe)
    .then(console.log)
    .catch(console.error);
