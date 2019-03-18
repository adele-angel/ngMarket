# ngMarket
E-commerce | Online supermarket website (single page application). The website's system is role-based access control.

## Online Demo
https://ngmarket.herokuapp.com/

### Regular user can:
- Register & login into the system
- Get notification about shopping cart or order status on main page
- View on last purchase on main page 
- View products
- Add/Remove single product from cart
- Place an order and purchase products
- Download recipt in pdf format

### Administrator can:
- Login into the system
- View, add, edit and delete products

> To login as administrator use the following email and password

    Username: admin@mail.com
    Password: 1234

## Usage
1. Replace database URI
2. cd project folder
3. Type in terminal nodemon
4. cd project folder/client
5. Type in terminal ng serve --open

###### Server packages

```
npm install --save
cors
bcryptjs
body-parser
express
jsonwebtoken
moment
mongoose
multer
validator
```

###### Client packages

```
npm install --save
bootstrap
jquery
popper.js
jspdf
font-awesome
angular-font-awesome
```

### Learning Objectives
- HTML5 + CSS3 + Bootstrap 4.0 + JavaScript (ES6)
- Angular 6
- TypeScript
- Node.js
	* Express.js
	* RESTfull application
- MongoDB
	* Database queries
	* Mongoose ODM
 
 # Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
