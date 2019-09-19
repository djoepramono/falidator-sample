---
marp: true
theme: default
---


# Falidator

<!-- _backgroundColor: #d0d0d0 -->

Makes TypeScript validation fun again :v:

---

# The code that starts it all

```js
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
const joe = { name: "Joe", age: 14 }
validatePerson(joe).then(console.log).catch(console.error);

```

---

<!-- _backgroundColor: #d0d0d0 -->

# What bothers me

- too many `if`s
- errors are handled via exception
- errors are handled one by one

---

# Ideal solution

```js
const result = await runAsyncValidations<Person>([eighteenOrAbove, nonEmptyName, isAllowed,], joe)
```

---

<!-- _backgroundColor: #d0d0d0 -->

# Async Function and Promises

- `async` functions runs straight away
- `async` functions returns `Promise`
- `async` function can be composed i.e. Promise chain
- If you want to wait for `async` function, you can use `await`
- If you use `await` that means you are in `async` function
- `Error` exception and thus rejection break Promise chain at once
---

# Why don't we use `Promise.all` ?

---

<!-- _backgroundColor: #d0d0d0 -->


# `Promise.all`

- returns an array of resolved `Promise`
- or returns the first rejected `Promise`

---


# Falidator solves all of this things

- performs all validations, it doesn't stop half way
- handles `Error` as `Invalid`
- handles `Promise` rejection as `Invalid`
- typed with TypeScript, complete with type guards and other useful type aliases


---

<!-- _backgroundColor: #d0d0d0 -->


# Let's have a look at the code

---

# How the module is developed

Let's have a look at the `package.json`

- separate files and don't bundle all the things
- `main` point to `dist` folder
- `types` point to the main type file in `dist` folder
- `publishConfig` is set to public
- module (_or package_) name is scoped
- can add `keywords`

---

<!-- _backgroundColor: #d0d0d0 -->


# NPM link

Sample repo can point to local module repo with `npm link`

```
npm link ../falidator
```

It's basically just setting a symbolic link


To unlink

```
npm unlink @codeallnight/falidator
```

---

# What will happen if you have module repo as dependency in `package.json` and you run `npm install`, all while you have `npm link` on?

---

<!-- _backgroundColor: #d0d0d0 -->


# How to publish

- create an account with npmjs.com
- `npm login` which basically put a token in `~/.npmrc`
- `npm version patch -m 'add a feature'`
- `npm publish`

---

# Thank you

Falidator [GitHub](https://github.com/wecodeallnight/falidator)
Falidator Sample [Github](https://github.com/djoepramono/falidator-sample)

Twitter: [@djoepramono](https://twitter.com/djoepramono)
