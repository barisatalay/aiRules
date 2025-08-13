# aiRules

Ai Rules — One rule to rule every AI.

## Development

## Installation

```bash
npm install
```

## Build

Build the project and generate outputs in `dist/`:

```bash
npm run build
```

## Scripts

All available scripts are defined in `package.json` under `scripts`:

- `format`: Format the entire codebase using Prettier (writes changes).
  - Usage: `npm run format`
- `format:check`: Check formatting without writing changes.
  - Usage: `npm run format:check`
- `lint`: Run ESLint across the project.
  - Usage: `npm run lint`
- `lint:fix`: Run ESLint with auto-fix enabled.
  - Usage: `npm run lint:fix`
- `typecheck`: Run TypeScript type checks without emitting output.
  - Usage: `npm run typecheck`
- `build`: Compile TypeScript to JavaScript into `dist/`.
  - Usage: `npm run build`

- Ensure you are using a recent Node.js LTS version.
- Run `npm run format` and `npm run lint` before committing.
- Use `npm run typecheck` to validate types locally.



## License

MIT © Barış Atalay

## Links

- Repository: `https://github.com/barisatalay/aiRules`
- Issues: `https://github.com/barisatalay/aiRules/issues`
