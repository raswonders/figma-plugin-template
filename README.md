# Figma Plugin Template

This repository provides a template for creating Figma plugins using vite for ui and esbuild for plugin (main) part. It's designed to help you quickly scaffold your Figma plugin projects with minimal setup.
Based on [esbuild-react sample](https://github.com/figma/plugin-samples/tree/master/esbuild-react)

## Features

- **Esbuild bundler for plugin's (main) part**
- **Vite toolchain with React for plugin's UI part**
- **Optional tailwindcss**: Use tailwindcss in your project by scaffolding tailwindcss branch
- **Easy Setup**: Utilize [degit](https://github.com/Rich-Harris/degit) to easily scaffold your project, getting you started in no time.

## Getting Started

To get started with this template, you'll need to have `degit` installed. If you haven't installed `degit` yet, you can do so by running:

```bash
npm install -g degit
```

To scaffold new project run: 

```bash
#without tailwindcss
degit <your-github-username>/figma-plugin-template my-figma-plugin

#with tailwindcss
degit <your-github-username>/figma-plugin-template#tailwindcss my-figma-plugin

cd my-figma-plugin
```