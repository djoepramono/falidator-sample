const isAllowedA = async (person) => {
    const allowed = (person.name === 'Banned') ? false : true;
    return allowed;
};

const validatePersonA = async (person) => {
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

const joeA = { name: "Joe", age: 24 }
validatePerson(joe).then(console.log).catch(console.error);

const jackA = { name: "Jack", age: 14 }
validatePerson(jack).then(console.log).catch(console.error);

const bannedA = { name: "Banned", age: 34 }
validatePerson(banned).then(console.log).catch(console.error);