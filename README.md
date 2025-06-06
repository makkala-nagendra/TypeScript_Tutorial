# 🚀 TypeScript Setup Guide

This guide will help you install and run TypeScript projects with `ts-node` and enhance your development experience using VS Code extensions.

---

## ✅ Prerequisites

- Node.js installed (Download: https://nodejs.org)

Check Node and npm versions:

```bash
node -v
npm -v
```

## 📌 Step 1: Install TypeScript & ts-node
Install globally (optional but useful):

```bash
npm install -g typescript ts-node
```

Or install locally (recommended for projects):

```bash
npm install --save-dev typescript ts-node
```

## ⚙️ Step 2: Create tsconfig.json
Initialize TypeScript config:

```bash
npx tsc --init
```

Example minimal config:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
}
```

## ▶️ Step 3: Running the Code
Run using ts-node:

```bash
npx ts-node src/index.ts
```
Or compile and run:

```bash
npx tsc         # Compiles to /dist
node dist/index.js
```

## 💻 Recommended VS Code Extensions

Install the following extensions from the VS Code Marketplace:

### 🟦 TypeScript (Built-in)

* Provides syntax highlighting, IntelliSense, and type checking.

* Already included in VS Code.

### 🟨 Code Runner

* Allows running .ts files with a single click or shortcut.

* Search for "Code Runner" by Jun Han in Extensions.

### ✅ Settings for Code Runner (Optional)

Add this to your VS Code settings.json:

```json
"code-runner.executorMap": {
  "typescript": "ts-node"
},
"code-runner.runInTerminal": true
```
Now you can right-click your .ts file and click "Run Code" or press Ctrl + Alt + N.