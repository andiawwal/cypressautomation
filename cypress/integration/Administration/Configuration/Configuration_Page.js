describe('Configuration Page',function () {

    before(function () {
        cy.login('admin','asdasd123')
        cy.visit('http://asdasd.com/administration/config')
    })

    // beforeEach(function () {
    //     cy.visit('http://asdasd.com/administration/config')
    // })

    it('1053 - Hover Notes', function () {
        let n = 16, i
        let text = [
            'Number of day(s) for invitation to be expired, counted since created/updated.',
            'This text will be appended after user-defined description.',
            'This text will be prepended to T&C customer service input field.',
            'This text will be appended to T&C as default items for all request.',
            'This email will be used as sender in all promo request related notification email.',
            'These emails will be used as recipient in promo request submit event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as cc in promo request submit event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as bcc in promo request submit event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as recipient in promo request review event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as cc in promo request review event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as bcc in promo request review event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as approver in package purchase event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as as cc approver in package purchase event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as as bcc approver in package purchase event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as cc in package purchase event notification email. For multiple recipients, use ; as delimiter.',
            'These emails will be used as bcc in package purchase event notification email. For multiple recipients, use ; as delimiter.'
            ]
        for (i = 0; i < n; i++){
            cy.get('.fa-question-circle').eq(i).trigger("mouseover")
            cy.get('.tooltip').contains(text[i])
            cy.get('.fa-question-circle').eq(i).trigger("mouseout")
        }


    });
    it('1050-Configuration Page UI', function () {
        cy.clear.log;
        cy.get('.col-md-3 > strong').contains('Year')

        cy.get('.col-md-2 > strong').contains('Dollar Currency Rate')
        cy.get('.col-md-8 > :nth-child(4) > .col-md-1').should("exist")

        cy.get('legend').eq(1).contains('Merchant')

        cy.get(':nth-child(2) > .form-body > :nth-child(1) > .col-md-8 > :nth-child(1) > .control-label').should('contain','Invitation link expiration day(s)')
        cy.get('#expiredDay')

        cy.get('legend').eq(2).contains('Promo Request')
        cy.contains('Additional description')
        cy.get('#descriptionExtra')
        cy.contains('T&C Customer Service pretext *')
        cy.get('#tncCustomerService')

        cy.contains('Additional T&C (max 3)')
        cy.get('#tncCustomerService')
        cy.get(':nth-child(4) > :nth-child(1) > .tnc-box > :nth-child(1) > .col-md-8 > .row > .col-md-9 > .form-control')
        cy.contains('Promo Category')
        cy.get(':nth-child(5) > :nth-child(1) > .tnc-box > :nth-child(1) > .col-md-8 > .row > .col-md-9 > .form-control')

        cy.contains('Email Sender *')
        cy.get('#emailFrom')

        cy.contains('Submit Event Notification Email To')
        cy.get('#emailSubmitTo')
        cy.contains('Submit Event Notification Email Cc')
        cy.get('#emailSubmitCc')
        cy.contains('Submit Event Notification Email Bcc')
        cy.get('#emailSubmitBcc')
        cy.contains('Review Event Notification Email To')
        cy.get('#emailReviewTo')
        cy.contains('Review Event Notification Email Cc')
        cy.get('#emailReviewCc')
        cy.contains('Review Event Notification Email Bcc')
        cy.get('#emailReviewBcc')

        //Unlisted Elements automation
        // cy.contains('Package Purchase Notif Email Approver')
        // cy.get('.select2-choice')
        // cy.contains('Package Purchase Email Approver CC')
        // cy.get('#emailPackagePurchaseApproverCc')
        // cy.contains('Package Purchase Email Approver BCC')
        // cy.get('#emailPackagePurchaseApproverBcc')
        // cy.contains('Package Purchase Notif Email Cc')
        // cy.get('#emailPackagePurchaseCc')
        // cy.contains('Package Purchase Notif Email Bcc')
        // cy.get('#emailPackagePurchaseBcc')


        cy.get('[type=submit]').should("exist")

    });

    

    describe('Additional TnC',function () {

        it('1054- Additional T&C - Click Button Add - Empty Input Field', function () {
            cy.get('#customTnc > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addtnc][type=button]').click()
                cy.get('#customTnc > .row.ng-scope').its("length").should("eq",initialCount)
            })
        });

        it('1055 - Additional T&C - Click Button Add - Filled Input Field', function () {
            cy.get('#customTnc > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addtnc][type=text]').type('Ini Ngetest')
                cy.get('[name=addtnc][type=button]').click()
                cy.get('#customTnc > .row.ng-scope').its("length").should("be.gt",initialCount)
                cy.get('#customTnc > .row.ng-scope').contains('Ini Ngetest')
            })
        });

        //Fail, field disabled after succesfully adding another T&C
        xit('1056 - Additional T&C - Click Button Add - Multiple Data', function () {
            cy.get('#customTnc > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addtnc][type=text]').type('Test data 1.')
                cy.get('[name=addtnc][type=button]').click()
                cy.get('#customTnc > .row.ng-scope').its("length").should("be.gt",initialCount)
                cy.get('#customTnc > .row.ng-scope').contains('Test data 1.')
                cy.get('#customTnc > .row.ng-scope').then($els2 =>{
                    const secondCount = $els2.length
                    cy.get('[name=addtnc][type=text]').type('Test data 2.')
                    cy.get('[name=addtnc][type=button]').click()
                    cy.get('#customTnc > .row.ng-scope').its("length").should("be.gt",secondCount)
                    cy.get('#customTnc > .row.ng-scope').contains('Test data 2.')
                })
            })
        });

        it('1057 - Additional T&C - Click Button Delete - Single Data', function () {
            cy.get('#customTnc > .row.ng-scope').then($els => {
                const initialCount = $els.length
                const deletedText = $els.eq(0).text()
                cy.get('[name=deleteTnc][type=button]').eq(0).click()
                cy.get('#customTnc > .row.ng-scope').its("length").should("be.lt", initialCount)
                cy.get('#customTnc > .row.ng-scope').should("not.contain", deletedText)
            })
        });

        it('1058 - Additional T&C - Click Button Delete - Multiple Data', function () {
            let i
            for (i = 0; i < 2; i++){
                cy.get('#customTnc > .row.ng-scope').then($els => {
                    let initialCount = $els.length
                    if (initialCount > 1){
                        console.log(i)
                        let deletedText1 = $els.eq(0).text()
                        cy.get('[name=deleteTnc][type=button]').eq(0).click()
                        cy.get('#customTnc > .row.ng-scope').its("length").should("be.lt", initialCount)
                        cy.get('#customTnc > .row.ng-scope').should("not.contain", deletedText1)
                    }
                    else{
                        console.log(i)
                        cy.get('[name=deleteTnc][type=button]').eq(0).click()
                        cy.get('#customTnc > .row.ng-scope').should("not.exist")
                    }

                })
            }

        });

        it('1060 - Additional T&C - Click Button Add - input existing data', function () {
            cy.get('#customTnc > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addtnc][type=text]').type('Kupon tidak dapat diuangkan.')
                cy.get('[name=addtnc][type=button]').click()
                cy.get('#customTnc > .row.ng-scope').its("length").should("eq",initialCount)
            })
        });

    })

    describe('Category Promo',function () {
        it('1144 - Configuration Promo - Click Button Add - Empty Input Field', function () {
            cy.get('#customCategory > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addcategory][type=button]').click()
                cy.get('#customCategory > .row.ng-scope').its("length").should("eq",initialCount)
            })
        });
        it('1145 - Category Promo - Click Button Add - Filled Input Field', function () {
            cy.get('#customCategory > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addcategory][type=text]').type('Ini Ngetest')
                cy.get('[name=addcategory][type=button]').click()
                cy.get('#customCategory > .row.ng-scope').its("length").should("be.gt",initialCount)
                cy.get('#customCategory > .row.ng-scope').contains('Ini Ngetest')
            })
        });
        it('1146 - Category Promo - Click Button Add - input existing data', function () {
            cy.get('#customCategory > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addcategory][type=text]').type('Fashion')
                cy.get('[name=addcategory][type=button]').click()
                cy.get('#customCategory > .row.ng-scope').its("length").should("eq",initialCount)
            })
        });
        it('1147 - Category Promo - Click Button Add - Multiple Data', function () {
            cy.get('#customCategory > .row.ng-scope').then($els => {
                const initialCount = $els.length
                cy.get('[name=addcategory][type=text]').type('Test data 1.')
                cy.get('[name=addcategory][type=button]').click()
                cy.get('#customCategory > .row.ng-scope').its("length").should("be.gt",initialCount)
                cy.get('#customCategory > .row.ng-scope').contains('Test data 1.')
                cy.get('#customCategory > .row.ng-scope').then($els2 =>{
                    const secondCount = $els2.length
                    cy.get('[name=addcategory][type=text]').type('Test data 2.')
                    cy.get('[name=addcategory][type=button]').click()
                    cy.get('#customCategory > .row.ng-scope').its("length").should("be.gt",secondCount)
                    cy.get('#customCategory > .row.ng-scope').contains('Test data 2.')
                })
            })
        });
        it('1148 - Category Promo - Click Button Delete - Single Data', function () {
            let i
            for (i = 0; i < 2; i++){
                cy.get('[name=addcategory][type=text]').type('Test data ' + (i + 1) + '.')
                cy.get('[name=addcategory][type=button]').click()
                cy.get('#customCategory > .row.ng-scope').not('.ng-hide').then($els => {
                    let initialCount = $els.length
                    let deletedText1 = $els.eq(initialCount - 1).text()
                    cy.get('[name=deleteCategory][type=button]').eq(initialCount - 1).click()
                    cy.wait(1000)
                    cy.get('#customCategory > .row.ng-scope').not('.ng-hide').its("length").should("be.lt", initialCount)
                    cy.get('#customCategory > .row.ng-scope').not('.ng-hide').should("not.contain", deletedText1)
                })
            }
        });
    })





})

