# Cocktail API

## Objective

Create a single page APP where users can search for a specific drink from an API and the result will be display on the screen.

You can access the website at https://drinobre.github.io/cocktail/

<!-- <img alt="plan" src="/cocktail_api/src/images/API_MVP.png" /> // Not working -->

## Functionalities

Users will be able to interact with the API by:

- Searching by drink name
- Select a random cocktail using "Surprise me"

## Technical requirements

For this project, I will be using React.js to fetch the [Cocktail API](https://thecocktaildb.com/api.php).

#### Components Tree

- App
  -- Search
  -- Display

#### Third-party Libraries

- [gh-pages](https://www.npmjs.com/package/gh-pageshttps://www.npmjs.com/package/gh-pages): use to deploy the cocktail page on Github.
- bootstrap: use to create the modals on the homepage.
- semantic-ui: use to style the components.

## Implementation Plan

<details>
<summary>Initiate React and Structure Folder convention</summary>

- Init React (npx create-react-app <react-app-name>)
- Create the folder Components > App and add the app files automatically created by React
- Change the file location for APP and image in the import
- Test the APP (npm start)
</details>

<details>
<summary>Creating components</summary>

- Create separate folders for each component, which will be rendered on the main APP (for example, buttons, display ...)
- Create the index.js file into each component, which they will handle a function containing a return in JSX format.
- `Note: the return must be inside a <div> or <> tag`.
</details>

<details>
<summary>Creating custom Hook</summary>
  
- Create a folder called Hook to add the custom hooks.
- It's best practice to call the custom hook use<i>HookName</i>. in order to follow the same rule as useState, useReducer (...)
</details>
  
<details>
<summary>Link pages using Link and Routes</summary>  
  
- Install the [React Router](https://reactrouter.com/docs/en/v6/getting-started/installation) as a dependence > module npm install react-router-dom@6
- index.js:
  import { BrowserRouter } from "react-router-dom" and wrap up teh app on <BrowserRouter> instead of <React.StrictMode>. Otherwise, the App wouldn't render using the Routes and you can use on the APP file.
- app.js:
  import Link, Routes and Route from react-router-dom;
</details>

<details>
<summary>Use of Semantic UI React</summary>  
  
- install the [Semantic Ui React](https://react.semantic-ui.com/usage/) > npm install semantic-ui-react semantic-ui-css;
- add import "semantic-ui-css/semantic.min.css" on the main index.js file;

</details>

<details>
<summary>Use of Modal</summary>

- install [React Bootstrap](https://react-bootstrap.github.io/components/modal/) > npm install react-bootstrap bootstrap@5.1.3;
- Note: make sure to add the [bootstrap/dist/css/bootstrap.min.css](https://react-bootstrap.github.io/getting-started/introduction/#css) for styling.

</details>
  
## Learnings and Challenges
- Use of the tag <Headers> when creating pages;
- Create custom Hook to Fetch data;
- Use of Routes (multiple pages APP);
- How to use Modal;
- How to save an image on README file (format SVG or add the image on File);
- When mapping the array make sure to add the data fetched and the name of the const. For example, data.drinks.map();
- Import the semantic UI on the main index.js file;
- [Bug on semantic UI](https://github.com/Semantic-Org/Semantic-UI-React/issues/4287)
- Implement modals
  -- The documentation doesn't mentioned about what you have to import for the css to work. Therefore, I didn't import 'bootstrap/dist/css/bootstrap.min.css' for the style and the content was rendered on the bottom of the page without any style.

## References

- https://thecocktaildb.com/api.php
- https://beta.reactjs.org/
- https://wweb.dev/resources/css-separator-generator/
- https://www.npmjs.com/package/gh-pages
