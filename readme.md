# igents - Basic TypeScript App Generator

igents is a simple command-line tool to generate a basic TypeScript app. The generator automatically sets up a basic TypeScript project, complete with a TypeScript compilation configuration file and an example file to get you started.

## Using the generator

To generate a new TypeScript project, open your terminal in the folder where you want to create your project and type the following command:

```bash
igents
```

This command will create a new project and automatically set up a basic TypeScript project inside it.

## What's in the basic TypeScript project

The basic TypeScript project set up by the generator contains the following files:

- `tsconfig.json`: A basic TypeScript compilation configuration file.
- `src/index.ts`: A TypeScript example file that logs a greeting message to the console.

You can modify the `src/index.ts` file to start writing your TypeScript code.

## Scripts

The following scripts are available for use in the project:

- `dev`: Runs the project in development mode using ts-node-dev.
- `build`: Compiles the TypeScript code into JavaScript.

To use these scripts, open your terminal in the project folder and type the following command:

### Running in Development Mode

To run the project in development mode, type the following command:

```bash
pnpm run dev
```

This will run the project using `ts-node-dev`, which will automatically restart the server when changes are made.

### Compiling the TypeScript code

To compile the TypeScript code, type the following command:

```bash
pnpm run build
```

This will compile the TypeScript code and create a JavaScript file in the `dist` folder.

You can then run the JavaScript file using the following command:

```bash
node dist/index.js
```

## Conclusion

That's it! You now have a basic TypeScript project set up with two handy scripts for development and building. Happy coding!
