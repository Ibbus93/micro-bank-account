# Micro Bank Account
A React microfrontend with token based authentication based on Web Components

## Demo
https://ibbus93.github.io/micro-bank-account/

## Goals and motivations
The motivation behind this project is to test a personal approach to microfrontends. The goal of the 
Bank Account is to a type of validation where the frontend could not render the proper content if it does not 
receive from the container an authorization token. 

## Description
This module is part of the larger personal demo project about React microfrontends 
based on Redux. The project could work standalone but it's intended to be loaded at runtime by its 
<a href="https://www.github.com/Ibbus93/microfrontend-container" target="_blank">container</a>.

Hence, after the project stars, there are two possible behaviours:
  * **the project is standalone**, then it does not render the bank account because it has not received the 
  authorization token. For demo purpose only, there is a button "Show account anyway" to show
  the page even if there is not an authorization;
  
  * **the project is loaded by the container**, then it shows the account when a user is logged in.

The requested bank account data are exposed by a Mock Postman server.

## Project structure
The structure is very light and easy:
  *  `/public` contains the index.html to let the project work as standalone;
  *  `/src` contains the core of the project, in particular:
     *  `/api` contains the GET request of the bank account data;
     *  `/features` contains the account page and the page showed if the user is not authorized;
     *  `/store` contains the redux store with the saga effects to make the GET request.

## Technologies
This project is build using [React App Rewired](https://github.com/timarney/react-app-rewired), 
hence it requires a `config-overrides.js` file in order to work.

Other notable technologies used are:
  *  [Material UI](https://github.com/mui-org/material-ui)
  *  [Styled Components](https://github.com/styled-components/styled-components)
  *  [Axios](https://github.com/axios/axios)
  *  [Redux](https://github.com/reduxjs/react-redux)
  *  [Redux Saga](https://github.com/redux-saga/redux-saga)
  *  [Redux Actions](https://github.com/redux-utilities/redux-actions)
        
## Getting started

1. Clone the repository
2. `yarn install`
3. `yarn start`







