describe('Cities - Create New',function () {

    before(function () {
        cy.login('admin','asdasd123')
    })

    it('160:TC_CMS_2015Q10003_002_086', function () {
        cy.visit('http://asdasd.com/administration/cities')
        cy.get('.btn-primary').contains('Create new').click()
    });

    describe('Visited the page',function () {
        

        it('161:TC_CMS_2015Q10003_002_087',function () {
            cy.visit('http://asdasd.com/administration/cities/new')

            cy.get('.page-title').contains('New City').should("exist")
            cy.get('.caption').contains('City Form').should("exist")

            cy.get('[for=provinceName]').contains('Province')
            cy.get('.select2-chosen').contains('Select Province..')

            cy.get('[for=cityName]').contains('Name')
            cy.get('[type=text][id="cityName"]').should("exist")
            cy.get('[type=text][id="cityName"]').should("exist")

            cy.get('[for=cityStatus]').contains('Active City')
            cy.get('[class="iCheck-helper"]').should("exist")
        })

        it('162:TC_CMS_2015Q10003_002_088', function () {

            cy.get('.btn-info').click()

            cy.get('.invalid.ng-scope').eq(0).contains('Province is required')
            cy.get('.invalid.ng-scope').eq(1).contains('Name is required')

            cy.get('.toast-title').contains('Failed!')
            cy.get('.toast-message').contains('Please fill all mandatory fields')
            cy.wait(5000)

        });

        it('163:TC_CMS_2015Q10003_002_089',function () {

            cy.get('[type=text][id="cityName"]').type('Cobaaja')
            cy.get('.btn-info').click()
            cy.get('.invalid.ng-scope').contains('Province is required').should('be.visible')
            cy.wait(7000)
            cy.get('.invalid.ng-scope').contains('Province is required').should('not.be.visible')
            // cy.get('.toast-message').be
            //cy.wait(7000)
        })

        it('164:TC_CMS_2015Q10003_002_090',function () {

            cy.get('.select2-chosen').contains('Select Province..').click()
            cy.get('.ng-scope').contains('Sumatera Barat').click()
            cy.get('[type=text][id="cityName"]').clear
            cy.get('.btn-info').click()
            cy.get('.invalid.ng-scope').contains('Name is required')
        })

    })



})