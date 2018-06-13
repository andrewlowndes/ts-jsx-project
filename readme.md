# Typescript JSX Environment
A JSX web application development environment configured to use Typescript and Karma, Jasmine for testing.

## Features
- No UI libraries or frameworks, pure DOM and JSX (very small filesize)
- Type definitions for JSX Intrinsic elements cover all HTML5 native elements and attributes
- Fast dev environment
- Webpack for building bundled dist
- Easy testing and code coverage

## Commands

### Installing
Call `npm i` to install dependencies

### Preparing the development and distribution environments
Call `npm run prepare-env` to create symlinks for the dev and dist environments (required for manual ui testing).
This only needs to be done once.

### Development
Call `npm start` to start the typescript compiler, watch file changes and start a static file server (default port 8080).
Saving any .ts file will be automatically be recompiled, including generating source maps so refreshing the page should show the latest changes.
Additional dependencies that get installed via `npm i` will require you to re-run this process.

### Distribution
Call `npm run build` to create a minified bundled version of the application, ready for deploying. This can then be previewed by starting a second http server via `npm run dist`.

### Running tests
Call `npm test` to run through the full suite of tests in one run.

### Testing (debug)
Call `npm run test-debug` to start a Karma server for continuous testing whilst coding (watch changes).

### Testing (coverage)
Call `npm run coverage` to view the html docs of the coverage report (a coverage xml file and html docs are automatically generated after running the tests).

## How to

### Adding code
The entry file for compiling and running the Typescript is 'src/index.tsx'. Add your own code by creating a file with the '.ts' or the '.tsx' (JSX) extension in the src directory (or subdirectory).

### Writing tests
Add your tests to the src directory (or subdirectory) with the file extension '.spec.ts' or '.spec.tsx'.

### Add 3rd party libraries
Install the library via `npm i {libraryName}`.

e.g. `npm i jquery`,  `npm i rxjs`

Start using the library via ES6 import:

e.g. 
```javascript
import * as jquery from 'jquery';
```
```javascript
import { Subject } from 'rxjs';
```

For development and testing, the dependencies will also need adding to `config/system.conf.js`, add a link that maps the library to the npm folder:

e.g. for a project named 'ts-lib-project' which has a umd bundle file at `node_modules/ts-lib-project/lib/index.umd.js`, the following entry will be added to the map:
```javascript
System.config({
  ...
  map: {
    'ts-lib-project': 'npm:ts-lib-project/lib/index.umd.js'
  }
});
```

## QandA

### The render function is not being called when my state changes...
This is not React, there is no dynamic change detection or dom rerendering. The only similarity the component interface has to React is a render method and props/state properties.

### Where do all my images go?
There is an `asset` folder at the top level, which is symlinked over to the build and dist environments so you can put all of your static media in one place during development. Then once you are ready you could push them up to a CDN.

## Licence
All code is licenced under MIT.
