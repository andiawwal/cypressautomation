describe('Promo Request Collapse',function (){

    before(function (){
        cy.login('DavidCypress_131','Ragnarok01')
        cy.visit('http://asdasd.com/offer/requests/new')
        cy.get('#requestFormBody').invoke('show')
    })

    // beforeEach(function (){
    //     cy.visit('http://asdasd.com/offer/requests/new')
    //     cy.get('#requestFormBody').invoke('show')
    // })

    it('1171:New Promo Request Page - UI',function (){
        //duplicate S-Voucher 800
    })
    it('1845:Click Collapse Section',function (){
        cy.get('#calendarHeader').contains('Calendar').click()
        cy.get('#calendarBody').should("be.visible")

        cy.get('#requestFormHeader').contains('Promo Request Form').click()
        cy.get('#requestFormBody').should("be.visible")

        cy.get('#revenueModelHeader').contains('Revenue Model').click()
        cy.get('#revenueModelBody').should("be.visible")

        cy.get('#sgiFeatureHeader').contains('SGI Featurea').click()
        cy.get('#sgiFeatureBody').should("be.visible")

    })
    it('2324:Promo Detail - Merchant Admin', function () {
        //Duplicate SV1859
    });
    it('1857:Promo Detail - Salin dari promo sebelumnya - Ya', function () {
        cy.contains('Salin dari Promo Sebelumnya').siblings()
            .find('[type=radio]').eq(0).check()
        cy.contains('Pilih Promo untuk disalin..').should("be.visible")
    });
    it('1858:Promo Detail - Salin dari promo sebelumnya - Ya - Choose one of promo',function (){
        //Dummy data doesn't exist
    })
    it('1859:Promo Detail - Salin dari promo sebelumnya - Tidak', function () {
        cy.contains('Salin dari Promo Sebelumnya').siblings()
            .find('[type=radio]').eq(0).check()

        cy.contains('Pilih Promo untuk disalin..').should("not.be.visible")
    });
    it('1172:Judul Promo > 200 Chars',function (){
        const inputasd = '0123456789'
        cy.get('#name').type(inputasd.repeat(20)+'a')
        cy.contains('Judul promo tidak boleh lebih dari 200 karakter')
    });
    xit('1173:Judul Promo - Hover Notes',function (){
        cy.verifyHoverNotes('Judul Promo','Judul dari Promo yang ditawarkan. '+
            'Rule: ' +
            // FAIL Reason
            'Nama merchant harus tertera pada Judul Promo. ' +
            'Contoh: ' +
            'Nama merchant: Samsung ' +
            'Judul Promo: "Potongan 10% pembelian aksesoris dari Samsung')
    })
    it('1174:Kategori Promo - Click Dropdown Menu', function () {
        cy.get('#category').click().find('.ui-select-choices-row')
            .last().should('contain.text','Lain-lain')
    });
    it('1175:Kategori Promo - Click Dropdown Menu - Choose One',function (){
        cy.get('#category').click().find('.ui-select-choices-row')
            .contains('Fashion').click()
    });
    it('1194:Total Voucher Selama Periode - Generated Total Coupon', function () {
        //skipped
    });
    xit('1193:Total Voucher Selama Periode - Hover Notes',function (){
       cy.verifyHoverNotes('Total Voucher Selama Periode','Total Jumlah voucher yang akan dibagikan kepada User selama periode promo')
    });
    it('1214:Mekanisme Pengambilan Voucher - Choose Normal', function () {
        cy.get('#redeemType').click()
            .find('.ui-select-choices-row')
            .contains('Normal').click()
        cy.get('#redeemType').should("contain.text",'Normal')
    });
    it('1215:Mekanisme Pengambilan Voucher - Choose NFC', function () {
        cy.get('#redeemType').click()
            .find('.ui-select-choices-row')
            .contains('NFC').click()
        cy.get('#redeemType').should("contain.text",'NFC')
    });
    xit('1216:Mekanisme Pengambilan Voucher - Hover Notes - Choose Normal', function () {
        cy.get('#redeemType').click()
            .find('.ui-select-choices-row')
            .contains('Normal').click()
        cy.verifyHoverNotes('Mekanisme Pengambilan Voucher',
            'Mekanisme untuk user mengambil / meng-claim voucher di merchant. ' +
            'Normal: Menunjukkan voucher di aplikasi ke kasir di merchant ' +
            'NFC: Menggunakan teknologi NFC untuk claim')
    });
    xit('1217:Mekanisme Pengambilan Voucher - Hover Notes - Choose NFC', function () {
        cy.get('#redeemType').click()
            .find('.ui-select-choices-row')
            .contains('NFC').click()
        cy.verifyHoverNotes('Mekanisme Pengambilan Voucher',
            'Mekanisme untuk user mengambil / meng-claim voucher di merchant. ' +
            'Normal: Menunjukkan voucher di aplikasi ke kasir di merchant ' +
            'NFC: Menggunakan teknologi NFC untuk claim')
    });
    it('1218:Mekanisme Penukaran Voucher - Choose Online', function () {
        cy.get('#exchangeType').click()
            .find('.ui-select-choices-row')
            .contains('Online').click()
        cy.get('#exchangeType').should("contain.text",'Online')
    });
    xit('1220:Mekanisme Penukaran Voucher - Hover Notes - Online', function () {
        cy.get('#exchangeType').click()
            .find('.ui-select-choices-row')
            .contains('Online').click()
        cy.verifyHoverNotes('Mekanisme Pengambilan Voucher',
            '1. Staff di outlet/counter, tidak perlu mengetikkan kode outlet unik pada aplikasi di perangkat pengguna ketika pengguna datang untuk menukarkan kupon. ' +
            '2. Kode kupon akan langsung terlihat oleh pengguna maupun staff. ' +
            '3. Samsung tidak dapat menyediakan informasi mengenai banyaknya pengguna yang menukarkan kupon mereka ke outlet. ' +
            '4. Aplikasi tidak dapat menentukan apakah kupon sudah pernah ditukarkan ke outlet atau belum (dari sisi merchant yang menjaga). Kupon dapat dibuka berulang kali oleh pengguna aplikasi. ' +
            '5. Merchant wajib informasikan hasil penukaran ke Samsung setelah periode promo selesai. ' +
            '6. Biasanya digunakan oleh situs e-commerce.')
    });
    //fail karena tidak ada offline
    xit('1221:Mekanisme Penukaran Voucher - Hover Notes - Offline', function () {
        cy.get('#exchangeType').click()
            .find('.ui-select-choices-row')
            .contains('Offline').click()
        cy.verifyHoverNotes('Mekanisme Pengambilan Voucher',
            '1 Staff di outlet/counter, perlu mengetikkan kode outlet unik pada aplikasi di perangkat pengguna ketika pengguna datang untuk menukarkan kupon.  ' +
            '2 Kode kupon akan terlihat setelah kode outlet yang valid dimasukkan. ' +
            '3 Samsung dapat menyediakan informasi mengenai banyaknya pengguna yang menukarkan kupon mereka ke outlet.(request basis di akhir periode) ' +
            '4 Aplikasi dapat menentukan apakah kupon sudah pernah ditukarkan atau belum. Pengguna aplikasi tidak dapat membuka lagi kupon yang sudah pernah ditukarkan. ' +
            '5 Biasanya digunakan oleh merchant yang memiliki outlet fisik. '
            )
    });
    //Fail karena tidak ada offline, adanya ecommerce
    it('1219:Mekanisme Penukaran Voucher - Choose Offline', function () {
        cy.get('#exchangeType').click()
            .find('.ui-select-choices-row')
            .contains('Offline').click()
        cy.get('#exchangeType').should("contain.text",'Offline')
    });
    xit('1226:Kode Voucher - Hover notes - Samsung', function () {
        cy.get('#voucherProvider').click()
            .find('.ui-select-choices-row')
            .contains('Samsung').click()
        cy.verifyHoverNotes('Kode Voucher',
            'Kode Voucher akan disediakan oleh Samsung.')
    });
    xit('1227:Kode Voucher - Hover notes - Merchant', function () {
        cy.get('#voucherProvider').click()
            .find('.ui-select-choices-row')
            .contains('Merchant').click()
        cy.verifyHoverNotes('Kode Voucher',
            ' ' +
            'Kode Voucher perlu sediakan oleh Merchant (dalam bentuk .csv file). Wajib unik per kode. Kode hanya alphanumerical dan kapital (full caps) ' +
            'Contoh: ' +
            'Benar: AXN327 ' +
            'Benar: 234LDP ' +
            'Salah (tidak boleh special character): AXS-281 ' +
            'Salah (tidak boleh ada kecil): AxS281')
    });
})