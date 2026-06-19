# Jannchie Code Theme

A monorepo for the Jannchie Code theme, shipped to multiple targets from a
single source of truth.

## Packages

- `packages/vscode`: VS Code theme extension published to the VS Code Marketplace.
- `packages/shiki`: Shiki theme package published to npm.
- `packages/zed`: Zed theme family (`themes/jannchie.json`) for the Zed editor.
- `packages/core`: private shared theme source used by all targets.

Five variants are produced from one core: **Light**, **Light Soft**, **Dark**,
**Dark Soft**, and **Black**.

## Design Philosophy

The theme is built on a small set of rules that, together, determine every
color decision. The goal is that changing one hue propagates correctly across
five variants and every render target without hand-tuning.

### Three layers, one direction of flow

```
palette  ──►  tokens  ──►  modifiers  ──►  variant
(hex)        (semantic)    (deltas)        (theme.json / shiki)
```

- **Palette** is the only place hex literals live. Colors are named after what
  they look like, not where they are used (`ink`, `paper`, `brick`, `fog`,
  `carbon`, `rose`).
- **Tokens** assign palette entries to semantic roles grouped under
  `text` / `surface` / `accent` / `state` / `syntax` / `utility`. Token shape
  is locked by the type system (`as const satisfies`), so every variant fills
  exactly the same slots.
- **Modifiers** (`soft`, `black`) are diffs over a base variant. They override
  a handful of slots and inherit the rest. Five themes therefore reduce to
  two base palettes times two modifiers.

### Light and dark are not mirrors

Light and dark use independent palettes with different aesthetic intent, not
inverted lightness curves.

| Variant | Mood | Surfaces | Accents |
| --- | --- | --- | --- |
| Light | ink on paper, near-classical | `paper`, `cream`, `charcoal` | `brick`, `rust`, `amber`, `iris`, `plum` |
| Dark  | fog over carbon, modern soft  | `carbon`, `mist`, `fog`      | `rose`, `ember`, `butter`, `mint`, `sage`, `lilac` |

Each side is tuned to be coherent on its own ground; they meet only at the
token layer.

### Hue assignment is a grammar

Syntax colors are not chosen per-language. Each hue family carries a fixed
semantic load, so reading any file feels structurally consistent.

| Hue family | Role |
| --- | --- |
| red / rose          | keyword, control flow (strongest signal) |
| orange / amber      | function, string, decorator (execution, literal, annotation) |
| green / pine        | class, comment, regex, added |
| cyan / blue         | type, interface, property, namespace |
| magenta / pink      | import (structural boundary) |
| gray                | variable, punctuation (intentional quiet) |

### Foreground hierarchy through alpha, not extra grays

`text.secondary`, `text.muted`, and `text.subtle` are derived from
`text.primary` with progressively lower alpha. They are never picked as
separate gray swatches. This keeps the perceived hierarchy stable whether the
background is `cream`, `canvas`, or `carbon`.

### Stable slots, themed paint

Because the token shape is identical across variants, downstream code (status
bar rules, Shiki token scopes, editor groups) never branches on theme. The
variant decides which paint flows through the slots; the slots themselves do
not move.

## Development

```sh
pnpm install
pnpm build
pnpm test
```

## License

MIT - Copyright (c) 2020 Primer <br>
MIT - Copyright (c) 2021 Anthony Fu <br>
MIT - Copyright (c) 2023 Jianqi Pan
