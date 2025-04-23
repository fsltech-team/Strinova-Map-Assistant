# Update to latest version

- on root directory run 'npm run build'
- copy dist/assets to electron/assets
- open electron/index.html and replace the ./assets/index-????.js and ./assets/index-????.css
- update the version in electron/package.json
- update git tag to same version
- create a new release on github
- run 'npm run build:win' to build the windows version for example
- upload the new version to github release

# Development

```bash
npm run start
```

# Building

## Windows

```bash
npm run build:win
```

## Mac

```bash
npm run build:mac
```

## Linux

```bash
npm run build:linux
```

# Publishing

```bash
npm run publish
```