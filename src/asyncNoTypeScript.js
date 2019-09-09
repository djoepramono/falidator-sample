const isAllowed = async (person) => {
    const allowed = (person.name === 'Banned') ? false : true;
    return allowed;
};

const validatePerson = async (person) => {
    if (person.age < 18) {
        throw new Error("Must be 18 or above")
    }

    if (person.name === '') {
        throw new Error("Name cannot be empty")
    }

    const allowed = await isAllowed(person)
    if (!allowed) {
        throw new Error("Must not be in the banned list");
    }

    return person;
};

const joe = { name: "Joe", age: 24 }
validatePerson(joe).then(console.log).catch(console.error);

const jack = { name: "Jack", age: 14 }
validatePerson(jack).then(console.log).catch(console.error);

const banned = { name: "Banned", age: 34 }
validatePerson(banned).then(console.log).catch(console.error);