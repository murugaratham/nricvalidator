# Nricvalidator

Takes a string input and validates it using calculated checksum based on http://www.ngiam.net/NRIC/NRIC_numbers.pdf

## WIP

Read more on [Rollup](https://javascript.plainenglish.io/rollup-commonjs-umd-c6d019cfead)

### IIFE

```html
<!-- script.html -->
<script src="dist/js/nricvalidator.js"></script>
<script>
  console.log(validate("S1234567H"));
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
