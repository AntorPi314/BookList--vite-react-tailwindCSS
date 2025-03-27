![screenshot](https://github.com/AntorPi314/BookList--vite-react-tailwindCSS/blob/main/screenshot.png)


# Vite + React + Tailwind CSS Setup

This guide will help you set up a Vite project with React and Tailwind CSS.

## Installation

### 1. Create a Vite Project (CMD)
```sh
npm create vite@latest
```

### 2. Open Project Folder in VS Code
```sh
cd your-project-name
code .
```
For download node_modules >>
```sh
npm install 
```

### 3. Install Tailwind CSS and Vite Plugin
```sh
npm install tailwindcss @tailwindcss/vite
```

## Configuration

### vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()]
})
```

### index.css
```css
@import "tailwindcss";
```

## Documentation
- [Vite Documentation](https://vite.dev/guide/)
- [Tailwind CSS + Vite](https://tailwindcss.com/docs/installation/using-vite)


 
