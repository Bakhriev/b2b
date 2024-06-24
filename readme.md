# Install (yarn or npm)

```bash
yarn
```

## Dev

```bash
yarn dev
```

## Build

```bash
yarn build
```

## Preview

```bash
yarn preview
```

    dist
    ├── assets
    │   ├── fonts
    │   ├── img
    │   │   └── svg
    │   ├── vendors
    │   └── video
    ├── .index-(hash).css
    ├── .index-(hash).js
    └── all files from public ( favicon )

## Stylelint startup delay

In some cases, Stylelint may start with a delay of 20-30 seconds after the dev script is started. This can be caused by several reasons:
