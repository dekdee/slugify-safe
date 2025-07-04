# slugify-safe

A tiny and safe URL slug generator with emoji & unicode support.

## Install

```bash
npm install slugify-safe
```

## Usage

```js
import { slugifySafe } from 'slugify-safe';

slugifySafe("Hello World! 👋🏽 How’s it going?");
// => hello-world-👋🏽-hows-it-going
```

### Options

| Option     | Default   | Description               |
|------------|-----------|---------------------------|
| replacement| `-`       | Replace spaces/punctuation with this |
| lower      | `true`    | Convert to lowercase      |
| maxLength  | undefined | Truncate to length        |

## License

MIT
