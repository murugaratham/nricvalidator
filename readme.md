# Nricvalidator

Takes a string input and validates it using calculated checksum based on http://www.ngiam.net/NRIC/NRIC_numbers.pdf

## WIP

Read more on [Rollup](https://javascript.plainenglish.io/rollup-commonjs-umd-c6d019cfead)

### IIFE

```html
<!-- script.html -->
...
<body>
  <input type="text" maxlength="9" pattern=".{9}" onkeyup="checknric(this)" required />
</body>
...
<script src="https://unpkg.com/sgidvalidator@1.0.7/dist/js/nricvalidator.js"></script>
<script>
  function checknric(element) {
    var valid = nricvalidator.validate(element.value);
    if (!valid) alert("invalid!");
  }
</script>
```

### ES Modules

```bash
npm i nricvalidator
```

```jsx
import { validate } from "sgidvalidator";

const isValid = validate("S1234567H");
```
