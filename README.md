=>,,,  onClicking anywhere outside CreateContentModal box it should  disappear automatically -> onOutsideClick hook 

=>,,,  Sidebar should move on botton in mobile screen display , where it
    should be fixed and does not move ( hidden hides it)

=>,,,  backend - zod, bcrypt ,try catch

=>,,, delete content , add log out button with functionality 

=>+++ onclicking sidebar button like youtube all youtube cards should be be shown 

=>+++ libraries used for data fetching any one is good : react-hook-forms,react-query (better), swr
    -- we have done raw queries using axios and not used library

=>+++ if user signs-up but he exist then direct him directly to dashboard

=>learn and understand optional chaining , generics 

=>use recoil for adding content instead of adding useContent hook-> this is because the addContent window does not disappear when clicked on submit 

=>(done) Share brain using the the shareable link made, for this you need to create a route with path then as a file SharedBrain.tsx inside pages folder

=>add loading thingy wihch clicked signup, ...





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
