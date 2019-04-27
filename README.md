# FERN

## Description
Responsive, customer facing web application to view the inventory of FERN, a furniture store. Uses an API to filter current inventory.

## Specs

1. XMLHttpRequest on page load --> recieve api data back
2. Parse data into categories based on type (this assumes all entires will have a type specified)
3. Outputs buttons for each type, assigned that specific type
4. On click of button, for every type equal to the assigned id type, show the relevant products & info

### Responsive Features
* On desktop, nav is placed to the right
* On tablet, nav is placed at the bottom, products in scroll box
* On mobile, nav is placed at the top, products in scroll box

### API

https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture


### Setup Instructions

* Clone this repository to your desktop
* Open in preferred text editor to see all code used
* Navigate to project directory
* In your terminal: "$ npm install webpack@4.0.1 --save-dev"
* In your terminal: "$ npm install webpack-dev-server@3.1.0 --save-dev"
* In your terminal: "$ npm i" (assuming all packages needed are in package.JSON file)
* In your terminal: "$ npm run build"
* In your terminal: "$ npm run start"

Make sure you have Node.js installed.

### Languages/Libraries Used
* Javascript
* CSS
* Bootstrap
* jQuery
* Webpack
* NPM

Copyright (c) 2019 Clara Munro