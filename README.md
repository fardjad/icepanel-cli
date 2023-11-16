# icepanel-bot

## Installation

```bash
npm install -g icepanel-bot
icepanel --help
```

## Development

This project uses [`tsx`][1] for running TypeScript. Therefore no build step is 
required.

You can optionally link the package globally by running:

```bash
npm link
```

Then you can run the program from anywhere with:

```bash
icepanel --help
```

### NPM Scripts

- `format` - Formats the code and fixes linting errors.
- `fix` - An alias for `format`.
- `lint` - Lints the code and checks the style.
- `test` - Runs the tests.
- `test:coverage` - Runs the tests and generates a coverage report.

### Plugins

It's recommended to break up the functionality of the program into plugins. That 
makes testing and maintenance easier.

At startup, the program will load TypeScript files that match the glob 
pattern `./src/plugins/*/index.ts`. Each plugin script must export a function 
named register with the following signature:

```typescript
// The following type is also exported as `RegisterFunction` from the `interactive-commander` package.
(command: InteractiveCommand) => Promise<void> | void
```

[1]: https://github.com/esbuild-kit/tsx