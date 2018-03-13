Cypress.Commands.add('loginByToken', (csrfToken) => {
    cy.request({
    method: 'POST',
    url: 'https://github.com/session',
    gzip: true,
    form: true,
    body: {
        authenticity_token: csrfToken,
        login: 'user',
        password: 'pass'
    }
    })
})

describe('Accedo al blog de paradigma', function() {
    it('Busco algun blog de Nicolás', function() {
        cy.visit('https://www.paradigmadigital.com/dev/testeo-api-rest-mocha-chai-http/');
        cy.get('p.post-author',{ timeout: 2000 })
            .children('a.author')
            .should('contain', 'Nicolás Cordero');
        cy.get('a.trigger').click();
        cy.get('input.text').type('chai-HTTP');
        cy.get('form.inputWithButton').submit();
        cy.get('article.post_search_list',{ timeout: 5000 })
            .children('h2')
            .children('a')
            .should('contain','Testeo de API REST con Mocha y Chai-HTTP');
        cy.get('article.post_search_list',{ timeout: 5000 })
            .children('h2')
            .children('a')
            .should('have.attr', 'title')
            .and('include', 'Testeo de API REST con Mocha y Chai-HTTP');
    })
})

describe('Realizo un request a AS', function(){

    it('si accedo a mi perfil sin estar registrado, me redirecciona al login', function(){
        cy.visit('https://asfan.as.com/perfil/?backURL=https%3A%2F%2Fas.com%2F%3Fevent_log%3Dokdesc%26prod%3DREG&v=pf')
        //Campo de email del formulario de la pagina del login
        cy.get('#Email1')
    })

    it('Hago el request del login', function(){
        var resp=cy.request({
            method:"POST",
            url: 'https://asfan.as.com/conectar',
            form: true,
            body: {
                Email1: "user",
                Password:"pass",
                send:"1"
            }
        }).then((resp)=>{
            expect(resp.status).to.eq(200)
        })
        cy.visit('https://asfan.as.com/perfil/?backURL=https%3A%2F%2Fas.com%2F%3Fevent_log%3Dokdesc%26prod%3DREG&v=pf')
        cy.get("div.ug_foto")

    })
})

describe('Realizo un request a GitHub', function(){
    it('Hago el request de la buqueda', function(){
        cy.request('https://github.com/login')
            .its('body')
            .then((body) => {
            const $html = Cypress.$(body);
        const token  = $html.find("input[name=authenticity_token]").val()
        cy.loginByToken(token)
            .then((resp) => {
            expect(resp.status).to.eq(200)
    })
    })
        cy.visit('https://github.com/settings/profile')
        cy.get("img.avatar",{timeout:3000})
    })
})