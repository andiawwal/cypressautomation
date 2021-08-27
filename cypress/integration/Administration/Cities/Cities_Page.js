describe('Cities Page',function () {
    before(function () {
        //Login
        cy.login('admin','asdasd123')
        //Config Page
    })

    beforeEach(function () {
        cy.visit('http://asdasd.com/administration/cities')
    })

    function advancedCitiesSearch(dataToSearch,filterType){
        cy.get('[sp-adv="#advanced-search"]').click()
        cy.get('#name').type(dataToSearch)
        cy.get('.btn-info').click()
        cy.get('[data-toggle="dropdown"]').eq(1).click()
        cy.get('.dropdown-menu').find('.ng-binding').contains(filterType).click()
    }


    it('158-TC_CMS_2015Q10003_002_084', function () {
        advancedCitiesSearch('Bandung','All')
    });

    it('159-TC_CMS_2015Q10003_002_085', function () {
        advancedCitiesSearch('Bandung','Name')
    });
})