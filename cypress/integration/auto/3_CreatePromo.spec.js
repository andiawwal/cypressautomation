

describe('Admin',()=>{
    before(() => {
        cy.visit('http://asdasd.com/login')
        cy.get('[name=username').type("mag_aldmic")
        cy.get('[name=password').type("asdasd123")
        cy.get('.btn-success').click().wait(5000)
      })
      after(() => {
        cy.get('.dropdown-toggle > .hidden-xs').click()
        cy.get('a').contains('Log Out').click()
      })
    //   beforeEach(() => {
    //     cy.contains('span','Dashboard').should('be.visible')
    //     cy.contains('span','Activity').should('be.visible')
    //   })


    context ('forgot password',()=>{
        it('Verify Create Promo UI',()=>{
            cy.get('a[class="btn btn-primary btn-rounded"]').should('be.visible').click()
            cy.url().should('eq','http://asdasd.com/offer/requests/new')
            cy.get('.page-title').should('contain','New Promo Request')
           
            cy.get('#calendarHeader > .caption').should('contain.text','Calendar').click()
            // .wait(3000)
            // Calender UI
            // cy.get('label').contains('Revenue Model').should('be.visible')
            // cy.get('label').contains('Android Push Notification').should('be.visible')
            // cy.get('label[class="col-md-3 control-label"]').contains('Ads Banner Home').should('be.visible')
            // cy.get('label').contains('News Content').should('be.visible')
            // cy.get('label').contains('Pinned Promo Category').should('be.visible')
            // cy.get('label').contains('Pinned Promo ').should('be.visible')
            // cy.get('label').contains('Pop-Up Notification').should('be.visible')
            // cy.get('label').contains('Share to Socmed').should('be.visible')
            // cy.get('label').contains('Location Based').should('be.visible')
            // cy.get('label').contains('Periode Promo ').should('be.visible')
            // cy.get('label').contains('sampai').should('be.visible')
            // cy.get('label').contains('Jumlah Tayang / Publish Promo').should('be.visible')
            // cy.get('label').contains('Tipe Tayang / Publish Promo').should('be.visible')
            // cy.get('label').contains('Waktu Tayang / Publish yang Diharapkan ').should('be.visible')
            // cy.get('label').contains('Jam Tayang').should('be.visible')
            // //BUTTON ON CALENDER
            // cy.get('button').should('contain','Reset').and('be.visible')
            // cy.get('button').should('contain','Check').and('be.visible')
            // cy.get('button').should('contain','Previous').and('be.visible')
            // cy.get('button').should('contain','This Month').and('be.visible')
            // cy.get('button').should('contain','Next').and('be.visible')
            // //open collapse
            // cy.get('#requestFormHeader >.caption').should('contain.text','Promo Request Form').click().wait(3000)
            // //Request Form
            // cy.get('label').contains('Merchant Admin').should('be.visible')
            // cy.get('label').contains('Salin dari Promo Sebelumnya').should('be.visible')
            // cy.get('label[class="col-md-3 control-label"]').contains('Judul Promo').should('be.visible')
            // cy.get('label').contains('Kategori Promo').should('be.visible')
            // cy.get('label').contains('Jumlah Voucher setiap kali Tayang / Publish').should('be.visible')
            // cy.get('label').contains('Total Voucher Selama Periode').should('be.visible')
            // cy.get('label').contains('Batas Pengambilan Voucher').should('be.visible')
            // cy.get('label').contains('Mekanisme Pengambilan Voucher').should('be.visible')
            // cy.get('label').contains('Mekanisme Penukaran Voucher').should('be.visible')
            // cy.get('label').contains('Kode Voucher ').should('be.visible')
            // cy.get('label').contains('Batas Waktu Penggunaan Voucher (Klaim)').should('be.visible')
            // cy.get('label').contains('Segmentation').should('be.visible')
            // cy.get('label').contains('Device Category').should('be.visible')
            // cy.get('label').contains('Deskripsi Promo ').should('be.visible')
            // cy.get('label').contains('Syarat dan Ketentuan').should('be.visible')
            // cy.get('label').contains('Gambar Promo').should('be.visible')
            // cy.get('label').contains('Outlet(s)').should('be.visible')
            // //Open collapse revenue
            // cy.get('#revenueModelHeader>.caption').should('contain.text','Revenue Model').click().wait(3000)
            // //Revenue UI
            // cy.get('label').contains('Revenue Model').should('be.visible')
            // cy.get('label').contains('Nilai Promo').should('be.visible')
            // cy.get('#sgiFeatureHeader>.caption').should('contain','SGI Feature').click().wait(3000)
            // //SGI Feature UI
            // cy.get('label').contains('Android Push Notification').should('be.visible')
            // cy.get('label[class="col-md-3 control-label"]').contains('Ads Banner Home').should('be.visible')
            // cy.get('label').contains('News Content').should('be.visible')
            // cy.get('label').contains('Pinned Promo Category').should('be.visible')
            // cy.get('label').contains('Pinned Promo ').should('be.visible')
            // cy.get('label').contains('Pop-Up Notification').should('be.visible')
            // cy.get('label').contains('Share to Socmed').should('be.visible')
            // cy.get('label').contains('Location Based').should('be.visible')
            // //BUTTON
            // cy.get('a[class="btn btn-danger mhl"]').should('contain','Cancel').and('be.visible')
            // cy.get('button').should('contain','Preview on App').and('be.visible')
            // cy.get('button').should('contain','Save Draft').and('be.visible')
            // cy.get('button').should('contain','Submit').and('be.visible')
        })
    //     it('Verify Create Promo UI',()=>{
    //         Cypress.on('uncaught:exception', (err, runnable) => {
    //             // returning false here prevents Cypress from
    //             // failing the test
    //             return false
    //         })
    //         //  cy.get('[ng-click="requestCreate.openPreviewModal(); countlyPush('Preview promo')"]').click().wait(3000)
    //   //      cy.get('.page-title').should('contain','Dashboard | Revenue')
    //      //   cy.url().should('eq','http://asdasd.com/offer/requests')
    //     })

    })
})