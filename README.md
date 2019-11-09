[![Build Status](https://travis-ci.com/steveesamson/tsdemo.svg?branch=master)](https://travis-ci.com/steveesamson/tsdemo)
[![Coverage Status](https://coveralls.io/repos/github/steveesamson/tsdemo/badge.svg?branch=master)](https://coveralls.io/github/steveesamson/tsdemo?branch=master)

# tsdemo -

A demo on learning how to author node modules with TypeScript.

## Installation

```bash
	npm install tsdemo
```

## Usage

### ES6/TypeScript

```javascript
import { sayHello } from 'tsdemo';

let greet = sayHello('Steve');
console.log(greet); // Prints Hello Steve!
```

### ES5

```javascript
var sayHello = require('tsdemo').sayHello;

var greet = sayHello('Steve');
console.log(greet); // Prints Hello Steve!
```

## Test

```bash
   npm test
```
