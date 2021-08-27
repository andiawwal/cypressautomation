describe('Revenue Config - Subscription Based',function () {
    before(function () {
        cy.login('admin','asdasd123')
    })

    beforeEach(function () {
        cy.visit('http://asdasd.com/administration/revenue/subscription')
    })

    it('2380:Subscription Based Edit - Page UI', function () {

        cy.get('.page-title').contains('Subscription Based Model')

        cy.get('[for=modelName]').contains('Revenue Model Name')
        cy.get('[ng-model="subscription.name"]').should("exist")

        cy.get('[for=modelDescription]').contains('Description')
        cy.get('[ng-model="subscription.description"]').should("exist")

    });

    function statusChange(packagetoEdit, setStatusTo){

        cy.contains('tr > td',packagetoEdit).siblings()
            .contains('[ng-bind-html="subs.status"]','ACTIVE').then($el=>{
            let packageStatus = $el.text()

            cy.wrap($el).siblings().find('a').not('ng-hide').contains('able',{ matchCase: false }).click()

            if (setStatusTo != packageStatus){
                cy.wait(500)
                cy.contains('tr > td',packagetoEdit).siblings()
                    .contains('[ng-bind-html="subs.status"]','ACTIVE').then($el2=>{
                    cy.wrap($el2).siblings().find('a').not('ng-hide').contains('able',{ matchCase: false }).click()
                })
            }
            cy.get('.toast-title').contains('Success!')
            cy.get('.toast-message').contains('The status has been updated successfully')
        })
    }

    it('Proposed updated test cases - Click Button Disable',function () {
        statusChange('A_2','ACTIVE')
    })

    it('Proposed updated test cases - Click Button Enable',function () {
        statusChange('A_2','INACTIVE')
    })

})