## Objective

Create a single page APP where users can search for a specific drink from an API and the result will be display on the screen.

## Technical requirements

I will be using React to build the APP.

## Components Tree

- App
  -- Search
  -- Display

## Implementation Plan

### Initiate React and Structure Folder convention

- Init React (npx create-react-app <react-app-name>)
- Create the folder Components > App and add the app files automatically created by React
- Change the file location for APP and image in the import
- Test the APP (npm start)

### Creating components

- Create separate folders for each component, which will be rendered on the main APP (for example, buttons, display)
- Create the index.js file into each component, which they will handle a function containing a return in JSX format.
  Note: the return must be inside a <div> or <> tag

# Creating custom Hook

- Create a folder called Hook to add the custom hooks.
- It's best practice to call the custom hook use<i>HookName</i>. So. the follow the same rule as useState, useReducer (...)

# Link pages using <Link> and <Routes>

- Install the [React Router](https://reactrouter.com/docs/en/v6/getting-started/installation) as a dependence > module npm install react-router-dom@6
- index.js:
  import { BrowserRouter } from "react-router-dom" and wrap up teh app on <BrowserRouter> instead of <React.StrictMode>. Otherwise, the App wouldn't render using the Routes and you can use on the APP file.
- app.js:
  import Link, Routes and Route from react-router-dom;

# Use of Semantic UI React

- install the [Semantic Ui React](https://react.semantic-ui.com/usage/) > npm install semantic-ui-react semantic-ui-css;
- add import "semantic-ui-css/semantic.min.css" on the main index.js file;

# Use of Modal

- install [React Bootstrap](https://react-bootstrap.github.io/components/modal/) > npm install react-bootstrap bootstrap@5.1.3;
- Note: make sure to add the bootstrap/dist/css/bootstrap.min.css for styling.

## Learnings / Practices

- Use of the tag <Headers> when creating pages;
- Create custom Hook useFetch;
- Use of Routes (multiple pages APP)
-

## Challenges

- How to save an image on README file (format SVG or add the image on File)
- When mapping the array make sure to add the data fetched and the name of the const. For example data.drinks.map()
- Bug on semantic UI - https://github.com/Semantic-Org/Semantic-UI-React/issues/4287
- Implement modals
  -- The documentation doesn't mentioned about what you have to import for the css to work. Therefore, I didn't import 'bootstrap/dist/css/bootstrap.min.css' for the style and the content was rendered on the bottom of the page without any style.

## References

- https://beta.reactjs.org/
- https://wweb.dev/resources/css-separator-generator/
