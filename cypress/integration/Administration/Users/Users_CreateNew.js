let mandatoryFields = ['Username','Email','Password','Role'] //not to be changed
let fieldSelector = ['username','email','password','roleName'] //not to be changed
let dummyData = ['iniUsername','iniemail@gmail.com','inipass1234','ADMIN'] //change as what you want to input

function fieldInput(eqOrder, inputData){
    for(let i = 0; i < eqOrder.length; i++){
        if (eqOrder[i] === 3){
            cy.get('label[for=roleName]').contains('Role')
            cy.get('[id=roleName][name=roleName]').click()
            cy.get('.select2-result-label').then($el=>{
                cy.wrap($el).contains(inputData[3]).click()
            })
        }
        else{
            cy.get('label[for=' + fieldSelector[eqOrder[i]] + ']').contains(mandatoryFields[eqOrder[i]])
            cy.get('[placeholder=' + mandatoryFields[eqOrder[i]] + ']').type(inputData[eqOrder[i]])
        }
    }
}

function fieldVerification(noteqOrder){
    cy.get('.btn-info').contains('Submit').click()

    //Fail Verification
    for(let i = 0; i < noteqOrder.length; i++){
        cy.get('.invalid.ng-scope').eq(i).contains(mandatoryFields[noteqOrder[i]] + ' is required')
    }
    cy.get('.toast-title').contains('Failed!')
    cy.get('.toast-message').contains('Please fill all mandatory fields')
}

describe('Users - Create New',function () {

    before(function () {
        cy.login('admin','asdasd123')
    })

    beforeEach(function () {
        //Login
        cy.visit('http://asdasd.com/administration/users')
        cy.get('.btn-primary').contains('Create new').click()
                .wait(3000)
    })


    describe('Create New UI Verification',function () {
        // beforeEach(function () {
            // cy.get('.btn-primary').contains('Create new').click()
            //     .wait(3000)
        // })

        it('98:Verify Click Create New button', function () {
            cy.url().should('eq','http://asdasd.com/administration/users/new')
        });

        it('99:Verify Create New User UI',function () {
            cy.get('.page-title').contains('New User')
            cy.get('.caption').contains('User Form')
            cy.get('legend').contains('Required Credentials')

            cy.get('label[for=username]').contains('Username')
            cy.get('[type=text][placeholder=Username]').should("exist")

            cy.get('label[for=email]').contains('Email')
            cy.get('[type=email][placeholder=Email]').should("exist")

            cy.get('label[for=password ]').contains('Password ')
            cy.get('[type=password][placeholder=Password]').should("exist")

            cy.get('label[for=roleName]').contains('Role')
            cy.get('[id=roleName][name=roleName]').click()

            let roleNames = ['search','ADMIN','MERCHANT_AGGREGATOR','SEINS']

            cy.get('.select2-result-label').then($el=>{
                for(let i = 1; i < 4; i++){
                    cy.wrap($el).eq(i).contains(roleNames[i])
                }
            })

            cy.get('label[for=status]').contains('Activate User')
            cy.get('.iCheck-helper').should('exist')

            cy.get('label[for=fullname').contains('Full Name')
            cy.get('[type=text][placeholder="Full Name"]').should("exist")

            cy.get('.btn-danger').contains('Cancel')
            cy.get('.btn-info').contains('Submit')
        })

        describe('Empty Fields Verification',function () {

            it('100:Verify Submit with all field are empty', function () {
                fieldVerification([0,1,2,3])
            });

            it('101:Verify Submit with Username\'s field empty',function () {
                fieldInput([1,2,3],dummyData)
                fieldVerification([0])
            })

            it('102:Verify Submit with Email field empty',function () {
                fieldInput([0,2,3],dummyData)
                fieldVerification([1])
            })

            it('103:Verify Submit with Password\'s field empty',function () {
                fieldInput([0,1,3],dummyData)
                fieldVerification([2])
            })

            it('104:Verify Submit with role field isn\'t selected',function () {
                fieldInput([0,1,2],dummyData)
                fieldVerification([3])
            })
        })

        describe('Verify Submit - Failed Warnings',function () {

        })

    })

    describe('Cancel',function () {
        it('106:Verify Cancel with all field empty', function () {
            cy.get('tr[class=ng-scope]').eq(0).then($el =>{
                cy.get('.btn-primary').contains('Create new').click()
                    .wait(3000)
                cy.get('.btn-danger').contains('Cancel').click()
                cy.get('tr[class=ng-scope]').eq(0).then($el2 =>{
                    expect($el[0]).to.eq($el[0])
                })
            })

        });

        it('107:Verify cancel with all field already filled', function () {
            cy.get('tr[class=ng-scope]').eq(0).then($el =>{
                cy.get('.btn-primary').contains('Create new').click()
                    .wait(3000)

                fieldInput([0,1,2,3],dummyData)

                cy.get('.btn-danger').contains('Cancel').click()
                cy.get('tr[class=ng-scope]').eq(0).then($el2 =>{
                    expect($el[0]).to.eq($el[0])
                })
            })
        });


    })

    function createNew(role){

        cy.get('tbody > tr[class=ng-scope] > [class=ng-binding]').eq(0).then($el=>{
            let getID = $el.text()
            let username = 'DavidCypress_' + (parseInt(getID) + 1)

            let inputDataTemplate = [username, 'davidcypress@asd.co','Password1!',role]

            cy.get('.btn-primary').contains('Create new').click()
                .wait(3000)

            fieldInput([0,1,2,3],inputDataTemplate)
        })
    }
    describe('Succesful Submits Verification',function () {
        it('1169:Verify Submit with role SEINS', function () {
            createNew('SEINS')
            //cy.get('.btn-info').contains('Submit').click()
        });

        it('108:Verify Submit with role ADMIN', function () {
            createNew('ADMIN')
            //cy.get('.btn-info').contains('Submit').click()
        });

        it('109:Verify Submit with role MERCHANT AGGREGATOR', function () {
            createNew('MERCHANT_AGGREGATOR')
            //cy.get('.btn-info').contains('Submit').click()
        });
    })
})


