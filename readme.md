# theres-waldo

[![npm version](https://badge.fury.io/js/theres-waldo.svg)](https://badge.fury.io/js/theres-waldo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img alt="Waldo standing next to a sign that reads: There's Waldo" width="512" height="512" src="./tw.jpeg" style="width:512px;height:512px"/>

Find the directory and file name of the file from which it is called in es6 modules.

## Installation

```bash
npm install theres-waldo
```

## Usage

```javascript
import theresWaldo from "theres-waldo";
const { file, dir } = theresWaldo(import.meta.url); // Note: pass in `import.meta.url`
console.log(`Current file: ${file}`);
console.log(`Current directory: ${dir}`);
```

## API

The package exports the following function:

### `theresWaldo(importMetaUrl)`

- `importMetaUrl`: The `import.meta.url` of the current module.

- Returns an object with properties:

  - `file` -- current filename
  - `dir` -- directory properties.

> [!WARNING]
> Function must always be called with `import.meta.url` as its only argument.

## Old Behavior

Looking to polyfill commonJS behavior? Use the following snippet:

```javascript
import theresWaldo from "theres-waldo";
const { file: __filename, dir: __dirname } = theresWaldo(import.meta.url);
```

## License

MIT
