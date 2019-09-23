interface Person {
    name: string;
    age: number;
}

const checkAllowed = async (person: Person) => {
    const allowed = (person.name === 'Banned') ? new Error("Must not be in the banned list") : person;
    return allowed;
};

const eighteenOrAbove = async (person: Person) => {
    return (person.age >= 18) ? person : new Error("Must be 18 or above");
}

const nonEmptyName = async (person: Person) => {
    return  (person.name !== "") ? person : new Error('Name cannot be empty');
}

const alwaysFail = async(person: Person) => Promise.reject("always fail");

const john: Person = { name: "Banned", age: 4 }

const result = Promise.all([checkAllowed(john), eighteenOrAbove(john), nonEmptyName(john), alwaysFail(john)])
    .then(console.log)
    .catch(console.error);
