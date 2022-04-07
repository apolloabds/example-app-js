# Example App - vanilla js

## Start the app

Install the dependencies and start the server.
```sh
npm install
npm start
```

The last command should open your browser and navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## abds component usage

To use a Stencil built web component collection within a vanilla js project we need to:

1. Add `@abds/components` into your `package.json` as a dependency.
2. Import an [abds component](https://zeroheight.com/6af807fb0/v/latest/p/56f98e-components/b/173c7d) into your app and use it like any other html component.
    - In this example project, we imported `defineCustomElements` in `src/index.js` and called it right after. Later in that file you can see how we created an abds button like this: `document.createElement('abds-button')`.

## Additional information
For more information about the abds components that are available and their props see our [ZeroHeight documentation.](https://zeroheight.com/6af807fb0/v/latest/p/56f98e-components/b/173c7d)

For more information about integrating components without a framework see [Stencil's documentation here.](https://stenciljs.com/docs/javascript)


---
This project demonstrates using abds components in a vanilla js context.
