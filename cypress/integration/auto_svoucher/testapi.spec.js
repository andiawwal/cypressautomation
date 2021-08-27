describe ('testapi', function(){
it ('GET LIST', function(){
    cy.login('admin','asdasd123')
     cy.request('GET','http://asdasd.com/rest/users/me.json').then((response)=>{
        //let test = JSON.parse(response.body)
        expect(response.status).to.eq(200)
        expect(response.body.fullname).equal('Super Admin')
        
    })
    cy.request('GET','http://asdasd.com/rest/revenueTarget/all.json').then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).length('5')
        
    })

    cy.request('GET','http://asdasd.com/rest/roles/1.json').then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.id).equal('1')
        expect(response.body.permissions).length('75')
        
    })

})


})