describe('Admin',()=>{
    beforeEach(() => {
        cy.visit('http://asdasd.com/login')
        
        cy.get('[name=username').type("mag_aldmic")
        cy.get('[name=password').type("asdasd123")
        cy.get('.btn-success').click().wait(5000)
        cy.get('[ng-mouseover="_menu.mouseover(3)"] > [href="javascript:void(0);"]').click()
        cy.contains('span','View/Add Merchant').should('be.visible')
        cy.contains('span','View/Add Outlet').should('be.visible')
        cy.contains('span','View/Add Invitation').should('be.visible')
        cy.get('.active > .nav > :nth-child(1) > a').click().wait(3000)
        
        //cy.clearCookie('JSESSIONID')
        // cy.clearCookie('_ga')
        // cy.clearCookie('JSESSIONID')
    //     Cypress.Cookies.preserveOnce('_ga','GA1.2.1812773309.1576558458')
    //     Cypress.Cookies.preserveOnce('JSESSIONID','B57173D5FD13DFDB687DBF81D380268B')
      })

    //   beforeEach (() => {
    //    // Cypress.Cookies.preserveOnce('SESSION')
    //    // cy.setCookie('_ga','GA1.2.1812773309.1576558458') // hard coded session cookie
    //     // cy.setCookie('JSESSIONID','B0244EC0BC495A5496FC37738BE4673F') //
    //     // cy.setCookie('X-CSRF-TOKEN','c5b0d760-38a5-4a19-9961-52c1b6b0cdcd')
    //     Cypress.Cookies.preserveOnce('_ga')
    //     Cypress.Cookies.preserveOnce('JSESSIONID')
    //     Cypress.Cookies.preserveOnce('X-CSRF-TOKEN')
    //    // Cypress.Cookies.preserveOnce('X-CSRF-TOKEN','c5b0d760-38a5-4a19-9961-52c1b6b0cdcd')
        
    //   })
    //   after(() => {
    // //     cy.get('.dropdown-toggle > .hidden-xs').click()
    // //     cy.get('a').contains('Log Out').click()
    // //     // cy.clearCookie('_ga')
    // //     // cy.clearCookie('JSESSIONID')
    //         cy.clearCookies()
    //   })


    context ('Merchant_MAG',()=>{
       
        it('Verify merchant list UI',()=>{
            cy.visit('http://asdasd.com/login')

             cy.get('.page-title').should('contain','Merchant List')
             cy.get('[ui-sref="merchant.view.create"]').should('be.visible')
             cy.get('.caption > .ng-isolate-scope').should('be.visible').and('contain.text','Export')
             cy.get('.list-info').should('be.visible')
             cy.contains('id').should('be.visible')
            // cy.contains('Name').should('be.visible')
             cy.contains('logo').should('be.visible')
            // cy.contains('Statuts').should('be.visible')
             cy.contains('Actions').should('be.visible')
        })
        it('ClicK Create new merchant ',()=>{
        
            // cy.get('[ng-mouseover="_menu.mouseover(3)"] > [href="javascript:void(0);"]').click()
            // cy.get('.active > .nav > :nth-child(1) > a').click().wait(3000)
           cy.get('[ui-sref="merchant.view.create"]').click()
            cy.get('.page-title').should('contain.text','New Merchant')
            //cy.wait(3000)
            cy.get('.btn-danger').click()
           
        })
        it('Verify type search ',()=>{ 
         //   cy.url('http://asdasd.com/merchant/view').click()
         cy.get('form.ng-pristine > .input-group > :nth-child(1) > .btn').click()
         cy.get('h3').should('contain.text','Advanced Search')
         cy.contains('Merchant Name').should('be.visible')
         cy.contains('Merchant Info').should('be.visible')
         cy.get('#merchantName').type('essilor')
         cy.get('.btn-info').click()
         cy.get('tr.ng-scope > :nth-child(2)').should('contain.text','Essilor')
        //  cy.get('form.ng-pristine > .input-group > :nth-child(1) > .btn').click()
        //  cy.contains('Merchant Name').should('be.visible')
        //  cy.get('#merchantName').clear()
        //  cy.get('.btn-info').click()
         //cy.get('.text-center > .btn-danger').click()
            // cy.get('[ui-sref="merchant.view.create"]').click()
            //  cy.get('.page-title').should('contain','New Merchant')
            //  cy.get('.btn-danger').click()
            
         })
 

    })
})