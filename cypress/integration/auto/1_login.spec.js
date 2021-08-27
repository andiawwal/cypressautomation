/// <reference types="cypress" />


describe('Login Automation',()=>{
    
    context('login',() => {
        beforeEach(() => {
            cy.visit('http://asdasd.com/login')
          })
        it('[TC-39] Verify UI LoginPage',()=>{
             cy.get('h1').should('contain','Samsung Gift Indonesia - Merchant')
             cy.get('h4').should('contain','User Login')
             cy.get('[name=username').should('be.visible')
             cy.get('[name=password').should('be.visible')
             cy.get('label').should('contain','Keep me signed in')
             cy.get('a').should('contain','Forget your password?')
             cy.get('.btn').should('be.visible')

        })
        it('[TC-40] login invalid username&password',()=>{
             cy.get('[name=username').type("admin21")
            cy.get('[name=password').type("assd123")
            cy.get('.btn-success').click()
            cy.get('span').should('contain','Bad credentials')
         
        })
        it('[TC-41] Unregister username',()=>{
             cy.get('[name=username').type("rewq")
             cy.get('.btn-success').click()
             cy.get('span').should('contain','Bad credentials')
           }) 
        it('[TC-41] Verify invalid password',()=>{
            cy.get('[name=username').type("admin")
            cy.get('[name=password').type("asd123")
            cy.get('.btn-success').click()
            cy.get('span').should('contain','Bad credentials')
       }) 
       it('[TC-73] Blank username',()=>{
            cy.get('[name=password').type("asdasd123")
            cy.get('.btn-success').click()
            cy.get('span').should('contain','Bad credentials')
            
        })
        it('[TC-74] Blank password',()=>{
            cy.get('[name=username').type("admin")
            cy.get('.btn-success').click()
            cy.get('span').should('contain','Bad credentials')
        })
        it('[TC-43]blank both',()=>{
            cy.get('.btn-success').click()
            cy.get('span').should('contain','Bad credentials')
         })
         
        it('[TC-44] Valid login admin',()=>{
            cy.get('[name=username').type("admin")
            cy.get('[name=password').type("asdasd123")
            cy.get('.btn-success').click()
            cy.wait(5000)
            cy.get('div').contains("Dashboard | Revenue").should('be.visible')
            cy.get('.dropdown-toggle > .hidden-xs').click()
            cy.get('a').contains('Log Out').click()
         })
         it('[TC-1296]valid login seins',()=>{
            cy.get('[name=username').type("ilham")
            cy.get('[name=password').type("asdasd123")
            cy.get('.btn-success').click()
            cy.wait(5000)
            cy.get('div').contains("Dashboard | Revenue").should('be.visible')
            cy.get('.dropdown-toggle > .hidden-xs').click()
            cy.get('a').contains('Log Out').click()
         })
         it('[TC-48 ]valid login MAG',()=>{
            cy.get('[name=username').type("mag_aldmic")
            cy.get('[name=password').type("asdasd123")
            cy.get('.btn-success').click()
            cy.wait(5000)
            cy.get('div').contains("Dashboard | Revenue").should('be.visible')
            cy.get('.dropdown-toggle > .hidden-xs').click()
            cy.get('a').contains('Log Out').click()
         })
         it('[TC-750] valid login MA',()=>{
             cy.get('[name=username').type("ma1")
             cy.get('[name=password').type("asdasd123")
             cy.get('.btn-success').click()
             cy.wait(5000)
             cy.get('div').contains("Dashboard | Revenue").should('be.visible')
             cy.get('.dropdown-toggle > .hidden-xs').click()
             cy.get('a').contains('Log Out').click()
          })
        
     })
    context('forgot',()=>{
        beforeEach(() => {
                 cy.visit('http://asdasd.com/login')
                 cy.get('a').click()
                  })
        it('[TC-59] Click Forgot password UI',()=>{
            // cy.visit('http://asdasd.com/login')
           // cy.get('a').click()
            cy.get('h2').should('contain','Reset Password Request')
            cy.get('button').should('be.visible')
         })
         it('[TC-60]invalid username',()=>{
           // cy.get('a').click()
            cy.get('button').click()
            cy.get('p').should('contain','Username is required')
         })
         it('[TC-60] reset password valid data',()=>{
            //cy.get('a').click()
            cy.get('[name=username').type('mag_aldmic')
            cy.get('button').click()
            cy.get('h3').should('contain','Success!')
            cy.get('p').should('contain','Please check your email for further instructions to reset your Password.')
            cy.get('.btn').should('be.visible').click()
         })
    })
})





