# Benchmark
Benchmark runner for Fireball and Editor-framework.

## Javascript benchmark

### Install

```
cd javascript
npm install
npm start
```

### Run

open `*.html` or ``http://127.0.0.1:8513/*.html`

### API

- **suite**<br>
A test suite begins with a call to the global function `suite` with two parameters: a string and a function.<br>
The string is a name or title for a spec suite – usually what is being tested.<br>
The function is a block of code that implements the suite.

- **setup**<br>
To help a test suite DRY up any duplicated setup code, provides the global `setup` functions. As the name implies the `setup` function is called once. You can store data in `suite` Object, or define necessary variables. Code from body of the function will be presented in UI.

- **bench**<br>
Benchmark are defined by calling the global function `bench`, which, like `suite` takes a string and a function. The string is the title of the test and the function is the test


