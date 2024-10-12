# Learn about Build Tools: Webpack/Vite

## What is about build tools?
 - Compilation & Bundling
### Compilation
 - Convert vue/jsx/ts to js
 - Convert scss/less/tailwindcss to css
### Bundling
 - Combine all js files into one
 - Combine all css files into one
 - Minify all files (remove redundant characters)

## Why we need build tools?
### History of JS Modules
 - No module era
 - NodeJS: CommonJS module
 - Node & Browser: ES6 module

## Development & Production
### Development
 - Easy to debug : Hot reloading
### Production
 - High performance : Bundling & Optimized code

## Vite Architecture
### Development
 - ESbuild for compiling
 - Hot module replacement (HMR)
 - No bundling, use native ES modules
### Production
 - ESbuild for compiling
 - Bundling with Rollup