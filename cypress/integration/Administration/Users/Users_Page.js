describe('Users Page',function () {
    before(function () {
        cy.login('admin','asdasd123')
    })



    it('77 - Sub Menu Users Clicked', function () {
        cy.visit('http://asdasd.com/')
        cy.get('.menu-title').contains('Administration').click()
        cy.get('.submenu-title').contains('Users').click()
            .wait(2000)
        cy.url().should("eq",'http://asdasd.com/administration/users')
        cy.title().should("contain",'User List')
        cy.contains('User List')
    });

    describe('Visited Users Page',function () {
        beforeEach(function () {
            cy.visit('http://asdasd.com/administration/users')
        })

        it('78 - Verify User List Page UI', function () {
            cy.title().should('contain','User List')
            cy.get('.page-title').contains('User List')
            cy.contains('Showing')
            cy.get('[sp-adv="#advanced-search"][type=button]')
            cy.get('.caption > .btn').eq(0).contains('Create new')
            cy.get('.caption > .btn').eq(1).contains('Export')
            cy.get('[type=text][id=f]').should("exist")
            cy.get('.dropdown-toggle').should('exist')

            //Column

            var i
            var columnItems = ['ID', 'Username', 'Email', 'Full Name', 'Role', 'Created At', 'Status'];
            for (i = 0; i < columnItems.length; i++){
                cy.get('.header').contains(columnItems[i])
            }

            cy.get('th').contains('Actions')

            cy.get('.fa-edit').should("exist")
            cy.get('.fa-ban').should("exist")
        });

        it('79 - Verify maximum User list loaded first time', function () {
            cy.contains('Showing 100 from')
        });

        it('89 - Verify Export User List to CSV File', function () {
            //Skip
        });

        it('90 - Verify able to open exported file', function () {
            //Skip
        })

        it('91 - Verify to filter by All', function () {
            cy.get('[type=text][name=q]').type('Merchant{enter}')
            cy.get('tr[class=ng-scope]').then($el =>{
                var i
                for (i = 0; i < Math.floor($el.length / 15); i++){
                    cy.get('tr[class=ng-scope]').eq(i).contains('Merchant', {matchCase: false})
                }
            })
        });
        it('92 - Verify to filter by Username ', function () {
            cy.get('[type=text][name=f]').type('gmail')
            cy.get('[data-toggle=dropdown]').eq(1).click()
            cy.get('.dropdown-menu').contains('Username').click()
            cy.get('[ng-bind-html="user.username"]').then($el =>{
                var i
                for (i = 0; i < Math.floor($el.length / 15) + Math.floor($el.length / 10); i++){
                    cy.get('[ng-bind-html="user.username"]').eq(i).contains('gmail', {matchCase: false})
                }
            })
        });
        it('93 - Verify to filter by Email ', function () {
            cy.get('[type=text][name=f]').type('svoucher.com')
            cy.get('[data-toggle=dropdown]').eq(1).click()
            cy.get('.dropdown-menu').contains('Email').click()
            cy.get('[ng-bind-html="user.email"]').then($el =>{
                var i
                for (i = 0; i < Math.floor($el.length / 15) + Math.floor($el.length / 10); i++){
                    cy.get('[ng-bind-html="user.email"]').eq(i).contains('svoucher.com', {matchCase: false})
                }
            })
        });
        it('94 - Verify to filter by Full Name ', function () {
            cy.get('[type=text][name=f]').type('test')
            cy.get('[data-toggle=dropdown]').eq(1).click()
            cy.get('.dropdown-menu').contains('Full Name').click()
            cy.get('[ng-bind-html="user.fullname"]').then($el =>{
                var i
                for (i = 0; i < Math.floor($el.length / 15) + Math.floor($el.length / 10); i++){
                    cy.get('[ng-bind-html="user.fullname"]').eq(i).contains('test', {matchCase: false})
                }
            })
        });
        it('95 - Verify to filter by Role ', function () {
            cy.get('[type=text][name=f]').type('admin')
            cy.get('[data-toggle=dropdown]').eq(1).click()
            cy.get('.dropdown-menu').contains('Role').click()
            cy.get('[ng-bind-html="user.roleName"]').then($el =>{
                var i
                for (i = 0; i < Math.floor($el.length / 15) + Math.floor($el.length / 10); i++){
                    cy.get('[ng-bind-html="user.roleName"]').eq(i).contains('admin', {matchCase: false})
                }
            })
        });
        it('96 - Verify to filter by Creation Date ', function () {
            cy.get('[type=text][name=f]').type('Aug')
            cy.get('[data-toggle=dropdown]').eq(1).click()
            cy.get('.dropdown-menu').contains('Created At').click()
            cy.get('[ng-bind-html="user.creationDate | date:\'MMM d, y HH:mm:ss\'"]').then($el =>{
                var i
                for (i = 0; i < Math.floor($el.length / 15) + Math.floor($el.length / 10); i++){
                    cy.get('[ng-bind-html="user.creationDate | date:\'MMM d, y HH:mm:ss\'"]').eq(i).contains('Aug', {matchCase: false})
                }
            })
        });
        it('97 - Verify to filter by Status ', function () {
            cy.get('[type=text][name=f]').type('active')
            cy.get('[data-toggle=dropdown]').eq(1).click()
            cy.get('.dropdown-menu').contains('Status').click()
            cy.get('[ng-bind-html="user.status"]').then($el =>{
                var i
                for (i = 0; i < Math.floor($el.length / 15) + Math.floor($el.length / 10); i++){
                    cy.get('[ng-bind-html="user.status"]').eq(i).contains('active', {matchCase: false})
                }
            })
        });
    })


})