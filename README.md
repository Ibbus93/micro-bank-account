# Micro Bank Account
### A React microfrontend with token based authentication  

---

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
  
## Getting started

1. Clone the repository
2. `yarn install`
3. `yarn start`







