describe('-2376:Verify Edit Rule of No Revenue Model UI',function () {
    before(function () {
        cy.login('admin','asdasd123')
    })

    beforeEach(function () {
        cy.visit('http://asdasd.com/administration/revenue/config/2/edit')
    })

    it('2376:Verify Edit Rule of No Revenue Model UI',function () {
       //Failed test case
        cy.get('.page-title').contains('Edit No Revenue Model')

        cy.get('[for=modelName]').contains('Revenue Model Name')
        cy.get('[ng-model="subscription.name"]').should("exist")

        cy.get('[for=modelDescription]').contains('Description')
        cy.get('[ng-model="subscription.description"]').should("exist")
    });

    it('2376:Verify Edit Rule of No Revenue Model UI',function () {


    });

    it('2376:Verify Edit Rule of No Revenue Model UI',function () {


    });

})