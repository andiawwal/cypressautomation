describe('Cities Search',function () {

    before(function () {
        cy.login('admin','asdasd123')
    })

    beforeEach(function () {
        cy.visit('http://asdasd.com/administration/cities')
    })

    it('151-TC_CMS_2015Q10003_002_077 ', function () {
        cy.get('[sp-adv="#advanced-search"]').click()
        cy.get('#name').type('Aceh')
        cy.get('.btn-info').click()

        cy.get('tr[class=ng-scope]').then($el =>{
            let i, n = 0
            if ($el.length < 10){
                n = $el.length
            }
            else{
                n = 10
            }
            console.log(n)
            for (i = 0; i < n; i++){
                cy.get('tr[class=ng-scope]').eq(i).contains('Aceh', {matchCase: false})
            }
        })
    });

    it('153:TC_CMS_2015Q10003_002_079 (Duplicate)', function () {
        //Duplicate with SV151
    });

    it('152-TC_CMS_2015Q10003_002_078', function () {

        let kabupatenBali = ['Kabupaten Badung','Kabupaten Bangli','Kabupaten Buleleng', 'Kabupaten Gianyar',
            'Kabupaten Jembrana', 'Kabupaten Karangasem', 'Kabupaten Klungkung', 'Kabupaten Tabanan', 'Kota Denpasar']

        cy.get('[sp-adv="#advanced-search"]').click()

        cy.get('.select2-choice').click()
        cy.get('.select2-result-label').contains('Bali').click()


        cy.get('.btn-info').click()

        cy.get('tr[class=ng-scope]').then($el =>{
            let i, j, n = 0
            if ($el.length < 10){
                n = $el.length
            }
            else{
                n = 10
            }
            for (i = 0; i < n; i++){
                cy.get('tr[class=ng-scope]').eq(i).contains(kabupatenBali[i], {matchCase: false})
            }
        })
    });


    it('154:TC_CMS_2015Q10003_002_080', function () {

        cy.get('[sp-adv="#advanced-search"]').click()

        cy.get('.select2-choice').click()
        cy.get('.select2-result-label').contains('Aceh').click()

        cy.get('#name').type('Pidie')

        cy.get('.btn-info').click()

        cy.get('tr[class=ng-scope]').then($el =>{
            let i, j, n = 0
            if ($el.length < 10){
                n = $el.length
            }
            else{
                n = 10
            }
            console.log(n)
            for (i = 0; i < n; i++){

                cy.get('tr[class=ng-scope]').eq(i).contains('Pidie', {matchCase: false})
            }
        })
    });

    it('155-TC_CMS_2015Q10003_002_081 - Warning', function () {
        cy.get('[sp-adv="#advanced-search"]').click()
        cy.get('#name').type('abrakadabra')
        cy.get('.btn-info').click()
        cy.contains('Showing 0 from 0 records')
    });

})