import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";
import gitignore from "./gitignore";

execSync(`pnpm init -y`);

// Add some dependencies
execSync(`pnpm add -D typescript ts-node ts-node-dev`);

// Create tsconfig.json, .gitignore, src/index.ts
writeFileSync(
  "./tsconfig.json",
  JSON.stringify({
    compilerOptions: {
      target: "es6",
      module: "es6",
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
  }, null, 2)
);

writeFileSync("./.gitignore", gitignore);

mkdirSync("./src");

writeFileSync("./src/index.ts", "");

// Install all dependencies
execSync("pnpm install");