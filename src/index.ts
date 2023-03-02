#!/usr/bin/env node
import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";
import gitignore from "./gitignore";
import colors from "colors";
import path from "path";
console.log(colors.yellow("Generating project..."));

// Add some dependencies
writeFileSync(
  "./package.json",
  JSON.stringify(
    {
      name: process.cwd(),
      version: "1.0.0",
      description: "",
      main: "index.js",
      scripts: {
        dev: 'ts-node-dev',
        build: "tsc"
      },
      keywords: [],
      author: "",
      license: "ISC",
      devDependencies: {
        "ts-node": "^10.9.1",
        "ts-node-dev": "^2.0.0",
        "typescript": "^4.9.5",
      },
    },
    null,
    2
  )
);

// Create tsconfig.json, .gitignore, src/index.ts
console.log(colors.yellow("Creating files..."));
writeFileSync(
  "./tsconfig.json",
  JSON.stringify(
    {
      compilerOptions: {
        target: "es6",
        module: "CommonJS",
        lib: ["dom", "es6"],
        strict: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        moduleResolution: "node",
        outDir: "./dist",
        sourceMap: true,
      },
      include: ["src/**/*"],
      exclude: ["node_modules", "dist"],
    },
    null,
    2
  )
);

writeFileSync("./.gitignore", gitignore);

mkdirSync("./src");

writeFileSync("./src/index.ts", "");

// Install all dependencies
console.log(colors.yellow("Installing dependencies..."));
execSync("pnpm install");

console.log(colors.green("Project generated! Happy Hacking!"));
