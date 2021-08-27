describe('Create New Page',function (){
    before(function (){
        cy.login()
    })

    beforeEach(function (){
        cy.visit('http://asdasd.com/offer/promo_portal')
    })

    xit('Visit Create New Page', function () {
        cy.contains('.btn','Create new').click()
        cy.url().should("include",'/new')
    });

    describe('Page UI',function (){

        beforeEach(function (){
            cy.visit('http://asdasd.com/offer/promo_portal/new')
        })

        it('3154 - UI Verification ', function () {

            //Data to assert
            const headerList = [
                "Calendar",
                "Promo Request Form",
                "Revenue Model",
                "SGI Feature"
            ];

            const calendarList = [
                ["Act as",".fa-question-circle",".select2-choice"],
                ["Revenue Model"],
                ["Merchant",".fa-question-circle",".select2-choice"],
                ["Android Push Notification",".fa-question-circle",'[type="radio"]',["Ya","Tidak"]],
                ["Pop-Up Notification",".fa-question-circle","[type=\"radio\"]",["Ya","Tidak"]],
                ["Pinned Promo Home",".fa-question-circle","[type=\"radio\"]",["Ya","Tidak"]],
                ["Pinned Promo Category",".fa-question-circle","[type=\"radio\"]",["Ya","Tidak"]],
                ["Periode Promo",".fa-question-circle","[type=text]","label","type=text"]
            ];



            //UI Assertion
            //Caption Text
            // cy.assertCaption(headerList);

            //Calendar
            // cy.assertCaption(calendarList,'#calendarBody');
            //
            // //Promo Request Form
            // cy.assertCaption(calendarList,'#calendarBody');
            //
            // //Revenue Model
            // cy.assertCaption(calendarList,'#calendarBody');
            //
            // //SGI Features
            // cy.assertCaption(calendarList,'#calendarBody');

            cy.get('.caption').contains('Calendar').click()

            // let calendarList2 =
            //Get rows inside calendar Body
            // cy.get('#calendarBody').should("contain","Act as").parent('.row').siblings().then($el=>{
            //     let x = Cypress.dom.unwrap($el)
            //     cy.log(x)
            // })

            // cy.get('#calendarBody').contains('Act as')
            //     .siblings()
            //     .first().should("have.class","fa-question-circle")
            //     .next().should("have.class",".select2-choice")
            //
            //     .then($el=>{
            //
            // })

            // cy.assertRow(calendarList, "#calendarBody")
            cy.get('#calendarBody').contains(calendarList[0][0]).siblings()

            cy.get("#calendarBody").contains('.row', calendarList[0][0]).parent().siblings()

                .then($el=>{
                console.log($el.length)
                if ($el.length>1){
                    for (let i = 1; i < 7; i++){

                        cy.wrap($el).eq(i).then($nextElement=>{
                            for (let j = 1; j < calendarList[i].length; j++){

                                cy.wrap($nextElement).find(calendarList[i][j]).should("exist")
                                if (calendarList[i][j] === '[type="radio"]'){
                                    for(let k = 0; k < 2; k++){
                                        cy.log('Apa ini ' + calendarList[i][j+1][k])
                                        cy.wrap($nextElement).contains(calendarList[i][j+1][k])
                                    }
                                    break
                                }
                            }
                        })
                    }
                }
            })

        });

        x
        
        it('3155 - Collapse Section', function () {

            const headerList = [
                "Calendar",
                "Promo Request Form",
                "Revenue Model",
                "SGI Feature"
            ];

            cy.assertCaption(headerList);
        });

        let months = {
            'January' : 1,
            'February' : 2,
            'March' : 3,
            'April' : 4,
            'May' : 5,
            'June' : 6,
            'July' : 7,
            'August' : 8,
            'September' : 9,
            'October' : 10,
            'November' : 11,
            'December' : 12
        }

        it('3161 - Next Month', function () {
            cy.get('.caption').contains('Calendar').click()
            cy.get('h2.ng-binding').then($el => {
                const currentMonth = $el.text().split(' ')[0]
                const currentYear = $el.text().split(' ')[1];

                //random times
                let ranNum = Math.random() * 5;
                cy.log('Click next ' + ranNum + ' times')
                for (let i = 0; i < ranNum; i++) {
                    cy.get('#calendarBody',{log: false}).contains('.btn-primary', 'Next',{log: false}).click()

                }
                cy.get('h2.ng-binding').then($el2 => {
                    let changedMonth = $el2.text().split(' ')[0]
                    let changedYear = $el2.text().split(' ')[1]
                    if (months[currentMonth] - months[changedMonth] < 1){
                        expect(currentYear - (ranNum - months[currentMonth])).to.eql(parseInt(changedYear))
                    }
                    console.log(changedMonth)
                    expect(Math.abs(months[currentMonth] - months[changedMonth])).to.eql(ranNum)
                })

            })//current month
        });

        it('3162 - Previous Month',function (){
            cy.get('.caption').contains('Calendar').click()
            cy.get('h2.ng-binding').then($el => {
                const currentMonth = $el.text().split(' ')[0]
                const currentYear = $el.text().split(' ')[1];

                //random times
                let ranNum = Math.random() * 5;
                cy.log('Click previous ' + ranNum + ' times')
                for (let i = 0; i < ranNum; i++) {
                    cy.get('#calendarBody',{log: false}).contains('.btn-primary', 'Previous',{log: false}).click()

                }
                cy.get('h2.ng-binding').then($el2 => {
                    let changedMonth = $el2.text().split(' ')[0]
                    let changedYear = $el2.text().split(' ')[1]
                    if (months[currentMonth] - months[changedMonth] < 1){
                        expect(currentYear + (ranNum - months[currentMonth])).to.eql(parseInt(changedYear))
                    }
                    console.log(changedMonth)
                    expect(Math.abs(months[currentMonth] + months[changedMonth])).to.eql(ranNum)
                })

            })//current month
        })
    })
})