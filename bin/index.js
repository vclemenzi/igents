"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const gitignore_1 = __importDefault(require("./gitignore"));
const colors_1 = __importDefault(require("colors"));
const path_1 = __importDefault(require("path"));
console.log(colors_1.default.yellow("Generating project..."));
// Add some dependencies
(0, fs_1.writeFileSync)("./package.json", JSON.stringify({
    name: path_1.default.basename(path_1.default.dirname(__dirname)),
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
}, null, 2));
// Create tsconfig.json, .gitignore, src/index.ts
console.log(colors_1.default.yellow("Creating files..."));
(0, fs_1.writeFileSync)("./tsconfig.json", JSON.stringify({
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
}, null, 2));
(0, fs_1.writeFileSync)("./.gitignore", gitignore_1.default);
(0, fs_1.mkdirSync)("./src");
(0, fs_1.writeFileSync)("./src/index.ts", "");
// Install all dependencies
console.log(colors_1.default.yellow("Installing dependencies..."));
(0, child_process_1.execSync)("pnpm install");
console.log(colors_1.default.green("Project generated! Happy Hacking!"));
