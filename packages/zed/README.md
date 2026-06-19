# Jannchie Code Theme for Zed

The Jannchie Code theme for the [Zed](https://zed.dev) editor, generated from
the same `@jannchie/theme-core` source as the VS Code and Shiki builds. Ships
five variants in one family file: **Dark**, **Dark Soft**, **Black**, **Light**,
and **Light Soft**.

## Install

### From the extension registry

Search for **Jannchie Code** in Zed's extension panel (`zed: extensions`).

### Manually

Copy the generated family file into Zed's themes directory, then pick a variant
from the theme selector (`theme selector: toggle`):

```sh
cp themes/jannchie.json ~/.config/zed/themes/jannchie.json
```

## Build

```sh
pnpm --filter @jannchie/zed-theme build
```

This regenerates `themes/jannchie.json` from the shared color tokens.
