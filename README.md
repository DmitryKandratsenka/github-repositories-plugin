# Welcome to my home task repository. This project was created to demonstrate my coding skills and UI tech stack knowledge.

## The application was deployed using Github Pages: https://dmitrykandratsenka.github.io/github-repositories-plugin

#### This project uses the following tech stack:
 - ReactJS
 - TypeScript
 - Playwright
 - Material UI
 - Webpack
 - NPM

## Local build and deployment
Pre-installation: You have to use Node.js v18.x version.

In the root directory, you should run:

### `npm ci`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081) to view it in your browser.

To execute integration tests, run:

### `npm test`

Launches the `cucumber` test runner. Main framework testing frameworks are: `playwright` and `cucumberjs`

NOTE: `npm start` is required first to be running since tests do end-to-end verification

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The generated folder is being used for deployment.
