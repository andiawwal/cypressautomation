describe('Configuration Save',function () {
    before(function () {
        cy.login('admin','asdasd123')
    })

    beforeEach(function () {
        cy.visit('http://asdasd.com/administration/config')
    })


    function empty_MandatoryField(){
        cy.get('[type=submit]').contains('Save').click()

        cy.get('#toast-container').should("be.visible").then($el => {
            cy.wrap($el).find('.toast-title').contains('Failed!')
            cy.wrap($el).find('.toast-message').contains('Please fill all mandatory fields correctly')
        })
    }

    it('1051-Save - Empty Invitation Link Expiration', function () {
        cy.get('[type=number][id=expiredDay]').type('{selectall}{backspace}')
        empty_MandatoryField()
        cy.get('.invalid').should("contain",'Invitation link expiration day(s) cannot be empty.')
    });

    it('1052-Save - Empty T&C Customer Service pretext', function () {
        cy.get('[type=text][id=tncCustomerService]').type('{selectall}{backspace}')
        empty_MandatoryField()
        cy.get('.invalid').should("contain",'T&C Customer Service pretext cannot be empty.')
    });

    it('1059-Save - Save - Empty Email Sender', function () {
        cy.get('[type=text][id=emailFrom]').type('{selectall}{backspace}')
        empty_MandatoryField()
        cy.get('.invalid').should("contain",'Email sender cannot be empty.')
    });
})