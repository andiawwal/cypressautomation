function searchBy(item, testedItem){
    cy.get('[type=text][id='+item+']').type(testedItem+'{enter}')
    cy.get('.table').then(el=>{
        if (el.find('[ng-bind-html="user.'+item+'"]').length > 0){
            cy.get('[ng-bind-html="user.'+item+'"]').then($el =>{
                let i
                for (i = 0; i < Math.ceil($el.length / 15); i++){
                    cy.get('[ng-bind-html="user.'+item+'"]').eq(i).contains(testedItem, {matchCase: false})
                }
            })
        }
        else{
            cy.contains('Showing 0 from 0 records')
        }
    })

}
function searchByCombi(combiAmount, item, testedItem){
    let i
    for (i = 0; i < combiAmount; i++) {
        if (item[i] === 'roleName'){
            cy.get('.select2-choice').click()
            cy.get('.select2-result-label').contains(testedItem[i]).click()
        }
        else{
            cy.get('[type=text][id=' + item[i] + ']').type(testedItem[i])
        }
    }

    cy.get('[type=submit][value=Search]').click()

    for (i = 0; i < combiAmount; i++) {
        cy.get('tbody').then(el=>{
            if (el.find('[ng-bind-html="user.'+item[i]+'"]').length > 0) {
                console.log(item[i])
                cy.get('[ng-bind-html="user.'+item[i]+'"]').then($el =>{
                    let j

                    for (j = 0; j < Math.ceil($el.length / 15); j++) {
                        cy.get('[ng-bind-html="user.' + item[j] + '"]').eq(j).contains(testedItem[j], {matchCase: false})
                    }
                })
            }
        })
    }

}

describe('Users Search',function () {
    before(function () {
        cy.login('admin','asdasd123')
    })
    beforeEach(function () {
        cy.visit('http://asdasd.com/administration/users')
    })

    it('80-Verify Search User by Any Word', function () {
        cy.get('[name=q][type=text]').type('test{enter}')
        cy.get('tr[class=ng-scope]').then($el =>{
            let i
            for (i = 0; i < Math.ceil($el.length / 15); i++){
                cy.get('tr[class=ng-scope]').eq(i).contains('test', {matchCase: false})
            }
        })
    });
    it('81-Verify no word in search result', function () {
        cy.get('[name=q][type=text]').type('abrakadabra123123{enter}')
        cy.get('tr[class=ng-scope]').should("not.exist")
        cy.contains('Showing 0 from 0 records')
    });

    describe('Advanced Search',function () {
        beforeEach(function () {
            cy.get('.input-group-btn > [sp-adv="#advanced-search"]').click()
        })
        it('82-by Username', function () {
            searchBy('username','test')
        });
        it('83-by Email', function () {
            searchBy('email','107')
        });
        it('84-by Full Name', function () {
            searchBy('fullname','vivi')
        });
        it ('85-by Role Name', function () {
            cy.get('.select2-choice').click()
            cy.get('.select2-result-label').contains('MERCHANT_AGGREGATOR').click()
            cy.get('[type=submit][value=Search]').click()

            cy.get('[ng-bind-html="user.roleName"]').then($el =>{
                let i
                for (i = 0; i < Math.ceil($el.length / 15); i++){
                    cy.get('[ng-bind-html="user.roleName"]').eq(i).contains('MERCHANT_AGGREGATOR', {matchCase: false})
                }
            })
        });
        it('86-by Combination', function () {
            let searchCombinations = ['username','email','roleName']
            let searchItemCombinations = ['srin','107','MERCHANT_AGGREGATOR' ]
            searchByCombi(3,searchCombinations,searchItemCombinations)
        });
        it('87-Cancel Advanced Search', function () {
            cy.get('.btn-danger').contains('Cancel').click()
            cy.get('.panel-body').should("not.be.visible")
        });
        it('88-Verify no Username in advanced result', function () {
            searchBy('username','abrakadabra')
            cy.get('tr[class=ng-scope]').should("not.exist")
            cy.contains('Showing 0 from 0 records')
        });
    })

})