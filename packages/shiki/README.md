# Jannchie Theme for Shiki

Shiki-compatible themes generated from the same source as the Jannchie VS Code theme.

## Usage

```ts
import { jannchieDark } from '@jannchie/shiki-theme'
import { codeToHtml } from 'shiki'

const html = await codeToHtml('console.log("hello")', {
  lang: 'ts',
  theme: jannchieDark,
})
```

You can also import a generated JSON theme directly:

```ts
import jannchieDark from '@jannchie/shiki-theme/themes/jannchie-dark.json'
```

