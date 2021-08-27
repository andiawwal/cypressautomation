describe('Revenue Config Page', function(){
    before(function () {
        cy.login('admin','asdasd123')
    })



    it('2349 - Sub Menu Revenue Configuration Clicked', function () {
        cy.visit('http://asdasd.com/')
        cy.get('.menu-title').contains('Administration').click()
        cy.get('.submenu-title').contains('Revenue Configuration').click()
        cy.url().should('include','revenue/config')
    });

    describe('Visited Revenue Config', function () {
        beforeEach(function () {
            cy.visit('http://asdasd.com/administration/revenue/config')
        })

        it('2350 - Verify Revenue Configuration page UI', function () {
            //Outdated
            cy.get('.page-title').contains('Revenue Model List')

            cy.get('.table-spoint').then($el=>{
                cy.wrap($el).contains('Revenue Model Name')
                cy.wrap($el).contains('Description')
                cy.wrap($el).contains('Status')
                cy.wrap($el).contains('Last Update')
                cy.wrap($el).contains('Actions')
            })
        })
        it('2351:Click Button Managae SGI Feature', function () {
            cy.get('.btn-warning').contains('Manage SGI Feature Limitation').click()
            cy.url().should('include','revenue/sgifeature/limit')
        });

        let rules = ['Alacarte SGI Feature','No Revenue', 'Subscription Based']

        function editRule(ruletoEdit){
            cy.contains('tr > td',ruletoEdit).siblings()
                .find('a').not('.ng-hide').eq(0).click()

            cy.get('.page-title').contains(ruletoEdit)
        }

        it('2352:Click Button Edit Rule on Alacarte SGI Feature', function () {
            editRule(rules[0])
        });

        it(' -2353:Click Button Edit Rule on No Revenue Model', function () {
            editRule(rules[1])
        });

        it('2354:Click Button Edit Rule on Subscription Based', function () {
            editRule(rules[2])
        });


        function statusChange(ruletoEdit, setStatusTo){

            cy.contains('tr > td',ruletoEdit).siblings()
                .contains('[ng-bind-html="config.status"]','ACTIVE').then($el=>{
                let ruleStatus = $el.text()

                cy.wrap($el).siblings().find('a').not('ng-hide').contains('Activ',{ matchCase: false }).click()

                if (setStatusTo == ruleStatus){
                    cy.wait(500)
                    cy.contains('tr > td',ruletoEdit).siblings()
                        .contains('[ng-bind-html="config.status"]','ACTIVE').then($el2=>{
                        cy.wrap($el2).siblings().find('a').not('ng-hide').contains('Activ',{ matchCase: false }).click()
                    })
                }
                cy.get('.toast-title').contains('Success!')
                cy.get('.toast-message').contains('Revenue "' + ruletoEdit + '" has been successfully changed')
            })
        }

        describe('Activate / Inactive',function () {
            let revtoChange = 'Affiliate'

            it('Cancel Confirmation',function () {
                // cy.on('window:confirm', () => false);
            })

            it('Activate', function () {
                statusChange(revtoChange,'ACTIVE')
            });

            it('Inactive', function () {
                statusChange(revtoChange,'Inactive')
            });
        })
    });
})