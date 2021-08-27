/// <reference types="cypress" />

describe('Admin',()=>{
    before(() => {
        cy.visit('http://asdasd.com/login')
        cy.get('[name=username').type("admin")
        cy.get('[name=password').type("asdasd123")
        cy.get('.btn-success').click().wait(5000)
      })
    //   after(() => {
    //     cy.get('.dropdown-toggle > .hidden-xs').click()
    //     cy.get('a').contains('Log Out').click()
    //   })
    //   beforeEach(() => {
    //     cy.contains('span','Dashboard').should('be.visible')
    //     cy.contains('span','Activity').should('be.visible')
    //   })
    context ('forgot password',()=>{
        // it('Verify Menu admin',()=>{
         
        //     cy.contains('span','Dashboard').should('be.visible')
        //     cy.contains('span','Activity').should('be.visible')
        //     cy.contains('span','Administration').should('be.visible')
        //     cy.contains('span','Offer').should('be.visible')
        //     cy.contains('span','Merchant').should('be.visible')
        //     cy.contains('span','Report').should('be.visible').wait(5000)
        //     cy.url().should('eq','http://asdasd.com/')
        //     cy.get('.page-title').should('contain','Dashboard | Revenue')
           
           
        //     // cy.get('[ng-mouseover="_menu.mouseover(3)"] > [href="javascript:void(0);"]').click().wait(5000)
        //     // cy.contains('span','Configuration').should('be.visible')
        //     // cy.contains('span','Users').should('be.visible')
        //     // cy.contains('span','Cities').should('be.visible')
        //     // cy.contains('span','Revenue Configuration').should('be.visible')
        //   //  cy.get('.ng-scope.active > .nav > :nth-child(1) > a').click()
        //    // cy.contains('span','Revenue Target').should('be.visible')
        //     // cy.contains('Dashboard').should('be.visible').click()
        //   //   cy.get('.page-title').should('contain','Configuration')
        // })

       it('Verify Administration',()=>{
        cy.get('[ng-mouseover="_menu.mouseover(3)"] > [href="javascript:void(0);"]').click()
        cy.contains('span','Configuration').should('be.visible')
        cy.contains('span','Users').should('be.visible')
        cy.contains('span','Cities').should('be.visible')
        cy.contains('span','Revenue Configuration').should('be.visible')

        })
        // it('Verify Click Configuuration',()=>{
            
        //     cy.get('.active > .nav > :nth-child(1) > a').click().wait(5000)
        //     cy.get('.page-title').should('contain','Configuration')
        //     })

        //     it('Verify Click Users',()=>{
            
        //         cy.get('.ng-scope.active > .nav > :nth-child(2) > a').click()
        //         cy.get('.page-title').should('contain','Users')
        //         })            
        
            
        it('Verify Offer',()=>{
            cy.get('[ng-mouseover="_menu.mouseover(4)"] > [href="javascript:void(0);"]').click()
            cy.contains('span','Package Purchase').should('be.visible')
            cy.contains('span','Device Category').should('be.visible')
            cy.contains('span','Manage Ads Banner').should('be.visible')
            cy.contains('span','Segmentation').should('be.visible')
    
            })
        it('Verify Merchant',()=>{
            cy.get('[ng-mouseover="_menu.mouseover(5)"] > [href="javascript:void(0);"]').click()
            cy.contains('span','View/Add Merchant').should('be.visible')
            cy.contains('span','View/Add Outlet').should('be.visible')
            cy.contains('span','View/Add Invitation').should('be.visible')
            })    
        it('Verify Report',()=>{
            cy.get('[ng-mouseover="_menu.mouseover(6)"] > [href="javascript:void(0);"]').click()
            cy.contains('span','Redeem & Claim').should('be.visible')
            cy.contains('span','Purchased Alacarte').should('be.visible')
            cy.contains('span','Purchased Package').should('be.visible')
            cy.contains('span','Purchased Ads Banner').should('be.visible')
            cy.contains('span','Total Revenue').should('not.exist')
            })   


            
        // it('Verify Click Activitsy',()=>{
        //     cy.get('[ng-mouseover="_menu.mouseover(4)"] > [href="javascript:void(0);"]').click()
        //     cy.on('uncaught:exception', (err, runnable) => {
        //         expect(err.message).to.include('something about the error')
            
        //         // using mocha's async done callback to finish
        //         // this test so we prove that an uncaught exception
        //         // was thrown
        //         done()
            
        //         // return false to prevent the error from
        //         // failing this test
        //         return false
        //       })
        //     cy.contains('span','Manage Promo').should('not.be.visible')
        //   //  cy.get('.page-title').should('contain','Dashboard | Revenue')
       
        // })

    })



})