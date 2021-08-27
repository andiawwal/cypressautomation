// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// Cypress.Commands.add("login",(username,password)=>{
//     cy.get('[name=username').type("mag_aldmic")
//     cy.get('[name=password').type("asdasd123")
// })


Cypress.Commands.add('login', (username, password) => {
    username = typeof username !== 'undefined' ? username : 'admin';
    password = typeof password !== 'undefined' ? password : 'asdasd123';
    cy.visit('http://asdasd.com')
    cy.url().then(urlText=>{
        let urlLogin = urlText.includes('login')
        if (urlLogin){
            cy.get('[name=username').type(username);
            cy.get('[name=password').type(password);
            cy.get('.btn-success').click();
            cy.wait(2000)
        }
    })
    Cypress.Cookies.defaults({
        // preserve: 'JSESSIONID'
        whitelist: 'JSESSIONID'
    })
})

Cypress.Commands.add('assertCaption',(assertData, selector = '.caption')=>{
    cy.get(selector).then($list =>{
        for (let i = 0; i < assertData.length; i++){
            cy.wrap($list).should("contain",assertData[i]);
        }
    })
})

Cypress.Commands.add('assertRow', (assertData, bodySelector) =>{
    cy.get(bodySelector).contains(assertData[0][0]).siblings().then($el=>{
        cy.wrap($el).first().then($firstEl =>{
            cy.wrap($firstEl).find('.fa-question-circle')
            cy.wrap($firstEl).find('.select2-choice').should('contain','Select Merchant Aggregator')
        })
    })
    cy.get(bodySelector).contains(assertData[0][0]).parent.siblings().then($el=>{


        console.log($el.length)
        if ($el.length>1){
            for (let i = 1; i < 8; i++){
                cy.log('coba masuk ke ' + i + assertData[i])
                cy.wrap($el).eq(i).then($nextElement=>{
                    for (let j = 1; j < assertData[i].length; j++){
                        cy.wrap($nextElement).find(assertData[i][j]).should("exist")
                        if (assertData[i][j] === '[type="radio"]'){
                            for(let k = 0; k < assertData[i][j].length; k++){
                                cy.wrap($nextElement).find(assertData[i][j+1][k])
                            }
                            break
                        }
                    }
                })
            }
        }
    })
})