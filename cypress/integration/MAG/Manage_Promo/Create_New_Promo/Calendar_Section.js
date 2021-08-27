describe('Calendar Collapse',function (){

    before(function (){
        cy.login('DavidCypress_131','Ragnarok01')
    })

    beforeEach(function (){
        cy.visit('http://asdasd.com/offer/requests/new')
        cy.get('#calendarBody').invoke('show')
    })

    //Uses .parent.siblings because all elements are contained within a row.
    //Logic: find elements which are inside the same selector (parent) as "Revenue Model"

    it.only('1846:Calender - Revenue Model - Click Drop Down', function () {
        cy.contains('label[for="name"]','Revenue Model').parent().within($el=>{
            cy.wrap($el).find('#revenueModel').click()
                .find('.select2-result-label > .ng-binding')
                //Assert according to active revenue model in revenue configuration
                //comment inactive revenue model assertion to make sure automation passes
                .should("contain.text","Alacarte SGI Feature")
                .should("contain.text","Claim Based")
                .should("contain.text","No Revenue Model")
                .should("contain.text","Percentage Based")
                .should("contain.text","Subscription Based")
        })
    });

    it.only('1847:Calender - Revenue Model - Choose One', function () {
        cy.contains('label[for="name"]','Revenue Model').parent().within($el=> {
            cy.wrap($el).find('#revenueModel').click()
                .find('.select2-result-label > .ng-binding')
                .contains('Subscription Based').click()
        });

        // Subscription package rows shows up
        // cy.contains('label[for="name"]','Subscription Package').parent().within($el=> {
        //     cy.wrap($el)
        //         .find('.help-block')
        //         .contains('No Subscription Available, Please Purchase')
        // })
    });

    function verifyHoverNotes(item, content){


    }

    it('Hover Notes', function (){
        verifyHoverNotes('Revenue Model','1. Revenue satuan (alacarte) dari SGI Feature, yang dapat digabungkan dengan SGI Feature dari Subscription Package. 2. Revenue berdasarkan jumlah voucher/coupon yang di Claim. Nilai revenue per Claimed voucher dimasukkan saat membuat Promo. 3. Tidak ada revenue untuk SEINS dan Merchant Aggregator. 4. Revenue sharing antara Merchant Aggregator dan SEINS berdasarkan jumlah Claim.Persentase dan nilai revenue per Claimed voucher dimasukkan saat membuat Promo. 5. Revenue berdasarkan Subscription Package.')

        verifyHoverNotes('Android Push Notification','Notifikasi normal Android saat Promo mulai tayang')

        verifyHoverNotes('Ads Banner Home','Banner iklan di bagian teratas screen Promo Home selama Promo tayang. Maksimum 5 Promo per hari')

        verifyHoverNotes('News Content','Konten Berita di SGI')

        verifyHoverNotes('Pinned Promo Category','Promo selalu menempati urutan atas pada screen Promo Kategori')

        verifyHoverNotes('Pinned Promo Home','Promo selalu menempati urutan atas pada screen Promo Home')

        verifyHoverNotes('Pop-Up Notification','Full screen notification saat Promo mulai tayang')

        verifyHoverNotes('Share to Socmed','Share konten ke Media Sosial saat User berhasil mendapatkan Promo')

        verifyHoverNotes('Location Based','Notifikasi Promo tampil, saat user berada di dekat outlet sebuah promo')

        verifyHoverNotes('Periode Promo','Periode Promo yang ditawarkan. Rule: Maksimum periode dalam 1 promo adalah 3 bulan')

        verifyHoverNotes('Jumlah Tayang / Publish Promo', 'Berapa kali promo ingin ditampilkan / dipublish ke pengguna. Rule: Jumlah tayang / publish maksimum 1x dalam 1 minggu (Perhatikan jumlah minggu dalam periode promo yang diinginkan)')

        verifyHoverNotes('Tipe Tayang','Waktu tayang / publish pada hari yang sama sesuai dengan pilihan ditiap minggu selama periode promo. Contoh: Selasa - Promo akan ditayangkan setiap hari Selasa, sesuai dengan jumlah tayang dan selama periode promo')
    })

    describe('Revenue Model',function (){
        it('1862:Revenue Model - Claim Based',function (){
            cy.get('#revenueModel').click()
                .contains('Claim Based').click()

            cy.get('#revenueModelBody').invoke('show')
            cy.contains('Nilai Promo')
            cy.contains('Claim Value (IDR)')
            cy.contains('Evidence')
        })

        it('1864:Revenue Model - Persentage Based',function () {
            cy.get('#revenueModel').click()
                .contains('Percentage Based').click()
            cy.get('#revenueModelBody').invoke('show')
            cy.contains('Nilai Promo')
            cy.contains('Percentage Value')
            cy.contains('Evidence')
        })

        it('1865:Revenue Model - Subscription Based',function () {
            //duplicate 1847

        })

        it('1866:Revenue Model - No Revenue',function (){
            cy.get('#revenueModel').click()
                .contains('No Revenue').click()
            cy.get('#revenueModelBody').invoke('show')
        })

        it('1848:Calender - Revenue Model - Choose Subscription Based- Click Dropdown',function (){
            //duplicate 1864
        })
    })

    describe('Periode Promo',function (){
        const today = new Date()
        const currentDate = today.getDate()
        const startDate = currentDate + 1
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]

        function fillStartDate(){
            cy.get('#partnershipStartDate').click()
            cy.get('.datepicker')
                .then($datePicker=>{
                    cy.wrap($datePicker).contains('.day',startDate).not('.disabled').click()
                })
        }

        it('1176:Periode Promo - Click Start Date Picker - Minimum clickable date = Current date + 1', function () {
            cy.get('#partnershipStartDate').click()
            cy.get('.datepicker').should("be.visible")
                .then($datePicker=>{

                    //previous month
                    cy.wrap($datePicker).find('.prev').should("not.be.visible")
                    cy.log("Today's date: " + today.getDate() + " " + today.getMonth() + 1)
                    cy.wrap($datePicker).contains('.disabled.day',currentDate)
                    cy.wrap($datePicker).contains('.day',startDate).not('.disabled').click()
                })
        });

        it('1180:Periode Promo - Click End Date Picker - Minimum clickable date = Start date + 1', function () {
            fillStartDate()
            cy.get('#partnershipEndDate').click()
            cy.get('.datepicker').should("be.visible")
                .then($datePicker=>{
                    //previous month
                    cy.wrap($datePicker).find('.prev').should("not.be.visible")
                    //search for an element with .disabled.day as the selector
                    cy.wrap($datePicker).contains('.disabled.day',startDate)
                    cy.wrap($datePicker).contains('.day',startDate+1).not('.disabled')
                })
        });

        it('1181:Periode Promo - Click End Date Picker - Maximum clickable date = Start date + 90 days', function () {
            fillStartDate()
            cy.get('#partnershipStartDate').invoke("text").then(text=>{
                const dateText = text
                cy.log(dateText)
            })
            let last90days = new Date(today.setDate(today+90))

            cy.log("Expect the last clickable date to be: " + last90days.getDate() + " " + monthNames[last90days.getMonth()])

            cy.get('#partnershipEndDate').click()

            cy.get('.datepicker').should("be.visible")
                .then($datePicker=>{
                    //previous month
                    for (let i = 0; i < 3; i++) {
                        cy.wrap($datePicker).find('.next').eq(0).click()
                    }
                    cy.wrap($datePicker)
                        .find('.day').not('.disabled')
                        .last()
                        .then($el=>{
                            const selectDate = $el.text()
                            expect(selectDate).to.eql(last90days.getDate())
                    })

                })
        });

        xit('1182:Periode Promo - Automatically Calculated',function (){

        })
    })

    describe('Jumlah Tayang',function (){
        it('1184:Jumlah Tayang - Hover Notes', function () {
            //duplicate from 3341
        });
    })

    describe('Tipe Waktu Tayang',function (){
        it('1185:Tipe Waktu Tayang Dropdown Menu - Choose Same Day on Every Week',function (){
            cy.get('#dayBlastType').click()
            cy.contains('.ng-scope','Hari yang sama di tiap minggu').click()
            cy.contains('Waktu Tayang / Publish yang Diharapkan')
            cy.get('#dayOfBlast').should("be.visible")
        })

        it('1186:Tipe Waktu Tayang Dropdown Menu - Choose Date',function (){
            cy.get('#dayBlastType').click()
            cy.contains('.ng-scope','Tentukan sendiri').click()
            cy.contains('Waktu Tayang / Publish yang Diharapkan')
            cy.contains('#datePicker','Pilih tanggal').should("be.visible")
        })

        it('1191:Tipe Waktu Tayang - Hover Notes -Same Day on Every Week',function (){
            //duplicate 3341
        })

        it('1192:Tipe Waktu Tayang - Hover Notes - Choose Date',function (){
            //duplicate 3341
        })

    })
})