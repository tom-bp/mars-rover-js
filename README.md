### `npm start`

* Runs the project in development mode.  
* You can view your application at `http://localhost:3000`
* The page will reload if you make edits.

### `rs`

* While your application is running, if you need to manually restart your server, you do not need to completely kill and rebundle your application. Instead you can just type `rs` and press enter in terminal.

### `npm run build`

* Builds the app for production to the build folder.
* The build is minified and the filenames include the hashes.
* Your app is now ready to be deployed!

### `npm run start:prod`

* If you have previously built this app, this command runs the compiled app in production.
* You can view your application at `http://localhost:3000`

### `npm test`

* Runs the test watcher (Jest) in an interactive mode.
* By default, runs tests related to files changed since the last commit.

### `npm start -- --inspect`

* To debug the node server, you can use `razzle start --inspect`. This will start the node server and enable the inspector agent. For more information, see [this](https://nodejs.org/en/docs/inspector/).

### `npm start -- --inspect-brk`

* To debug the node server, you can use `razzle start --inspect-brk`. This will start the node server, enable the inspector agent and Break before user code starts. For more information, see [this](https://nodejs.org/en/docs/inspector/).