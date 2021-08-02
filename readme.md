# IDValidator

Takes a string input and validates it using calculated checksum

## WIP

Read more on [Rollup](https://javascript.plainenglish.io/rollup-commonjs-umd-c6d019cfead)

### IIFE

```html
<!-- script.html -->
<script src="dist/js/idvalidator.js"></script>
<script>
  console.log(validate("S1234567H"));
</script>
```

### ES Modules

```bash
npm i idvalidator
```

```jsx
import { validate } from "idvalidator";

const isValidId = validate("S1234567H");
```
