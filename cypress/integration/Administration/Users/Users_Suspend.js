describe('Users Suspend', function () {

    before(function () {
        cy.login('admin','asdasd123')
    })
    beforeEach(function () {
        cy.visit('http://asdasd.com/administration/users')
    })

    function filterByStatus(filterItem){
        cy.get('[data-toggle="dropdown"]').eq(1).click()
        cy.get('[ng-click="userList.selectedFilter=$index"]').contains('Status').click()
        cy.get('[name="f"]').type(filterItem + '{enter}')
    }

    function changeStatus(currentStatus){
        filterByStatus(currentStatus)

        cy.get(':nth-child(1) > [ng-bind-html="user.username"]').then($el=>{
            const userID = $el.text()

            let afterStatus

            if (currentStatus === 'ACTIVE'){
                cy.get(':nth-child(1) > :nth-child(8) > .btn-danger').click()
                afterStatus = 'SUSPENDED'

            }
            else{
                cy.get(':nth-child(1) > :nth-child(8) > .btn-success').click()
                afterStatus = 'ACTIVE'
            }

            cy.get('.toast-title').contains('Success!')
            cy.get('.toast-message').contains('USER "' + userID + '" has been successfully changed')

            cy.on('window:confirm', function (confirmText) {
                expect(confirmText).eq('Do you really want to change the status of this user?')
            })
        })
    }

    it('120:Verify to suspend user account', function () {
        changeStatus('ACTIVE')
    });

    it('124:Verify to unsuspend user account',function () {
        changeStatus('SUSPENDED')
    })


})