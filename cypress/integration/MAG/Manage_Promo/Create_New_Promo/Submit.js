xdescribe('Submit Form Validation',function (){
    before(function (){
        cy.login()
    })

    beforeEach(function (){
        cy.visit('http://asdasd.com/offer/requests/new')
        cy.get('#calendarHeader').contains('Calendar').click()
        cy.get('#requestFormHeader').contains('Promo Request Form').click()
        cy.get('#revenueModelHeader').contains('Revenue Model').click()
        cy.get('#sgiFeatureHeader').contains('SGI Feature').click()
    })

    function verifyPopUp(title, content){
        cy.get('toaster-title').should("contain",title)
        cy.get('toaster-message').should("contain",content)
    }

    it('1675:Submit - Empty Judul Promo', function () {
        cy.get('[type=submit]').click()
        verifyPopUp('Gagal!','Judul promo tidak boleh kosong')
        cy.contains('Judul promo tidak boleh kosong')
    });

    it('1675:Submit - Empty Revenue Model', function () {
        cy.get('[type=submit]').click()
        verifyPopUp('Gagal!','Revenue Model tidak boleh kosong')
        cy.contains('Revenue Model tidak boleh kosong')
    });

    it('Gagal tolong isi field dengan benar',function (){
        cy.get('[type=submit]').click()
        // verifyPopUp('Gagal!','Tolong isi field dengan benar')
        cy.contains('Jumlah tayang / publish promo tidak boleh kosong')
        cy.contains('Waktu tayang / publish yang diharapkan harus berada di antara rentang awal hingga akhir periode promo')
        cy.contains('Jumlah voucher setiap kali tayang / publish tidak boleh kosong')
        cy.contains('Batas pengambilan voucher tidak boleh kosong')
        cy.contains('File voucher tidak boleh kosong, jika memilih \'Merchant\' sebagai penyedia kode voucher')
        cy.contains('Batas waktu penggunaan voucher (klaim) tidak boleh kosong')
        cy.contains('Deskripsi promo tidak boleh kosong')
        cy.contains('Customer Service tidak boleh kosong')
        cy.contains('Gambar promo tidak boleh kosong')
        cy.contains('Nilai promo tidak boleh kosong')
    });

    it('1700:Submit - Jumlah Tayang < 1',function (){
        cy.get('#blastCount').type('0')
        cy.get('[type=submit]').click()
        cy.contains('Jumlah tayang / publish promo minimal 1')
    });

    it('2491:Submit - Empty Share Text',function (){
        cy.get('#calendarBody').contains('Share to socmed').siblings()
            .find('[type=radio]').eq(0).check()

        cy.get('[type=submit]').click()

        cy.get('#sgiFeatureBody').contains('Share text tidak boleh kosong')
    });

    it('1712:Submit - Nilai Promo < 1',function (){
        cy.get('#revenueModelBody').find('#voucherValue').type(0)
        cy.contains('Nilai promo tidak valid')
    })

})