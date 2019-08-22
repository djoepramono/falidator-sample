import { Validate, runValidations } from "@codeallnight/falidator"

interface Person {
    name: string;
    age: number;
}

const overEighteen: Validate<Person> = (person: Person) => {
    return (person.age > 18) ? person : { errorMessage: "Not over 18"}
}

const joe: Person = { name: "Joe", age: 24 }

const result = runValidations([overEighteen], joe);
console.log(result);