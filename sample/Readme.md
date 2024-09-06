# Guide for adding asset building to a project

* NOTE: use this as a guide, there are many ways to accomplish building css and js. Also, npm packages are updated all the time so your mileage may vary
* These instructions include babel which allows for support of ES6 features like arrow functions and async/await in older browsers - this can be evaluated as needed

## Steps
* in your project directory run `npm init` and answer prompts or hit enter to accept defaults
  * this creates the package.json file in your project
* CSS
  * add sass pkgs - run `npm i --save-dev sass`
* Stylelint for css
  * add stylelint pkgs - run `npm i --save-dev stylelint stylelint-config-standard-scss`
  * add .stylelintrc file
* JS
  * add webpack to build and minify js - run `npm i --save-dev webpack webpack-cli`
    * add webpack.config.js
  * Eslint
    * add .eslintrc
    * add eslint pkgs - run `npm i --save-dev eslint eslint-webpack-plugin @babel/eslint-parser`
  * Babel
    * add .bablerc
    * add babel pkgs - run `npm i --save-dev @babel/cli @babel/core @babel/preset-env babel-loader`
  * Prettier
    * add .prettierrc and prettierignore
    * add prettier pkgs - run `npm i --save-dev prettier eslint-config-prettier`
* Pkgs to assist build and watch
  * add pkgs - run `npm i --save-dev onchange npm-run-all`
  * add .gitignore