import EventController from '../controllers/EventController.js'
import EnrollController from '../controllers/EnrollController.js'
import UserController from '../controllers/UserController.js'

export default class EnrollView {
    constructor() {
        this.eventController = new EventController();
        this.enrollController = new EnrollController();
        this.userController = new UserController();

        //this.main = document.querySelector("main")
        this.btnBack = document.querySelector(".btnBack")
        
        this.btnIndidual = document.querySelector("#btnIndividual")
        this.btnEquipa = document.querySelector("#btnEquipa")

        //formulário inscrição individual
        this.addNrIdentidade = document.querySelector("#addNrIdentidade")
        this.addTelefone = document.querySelector("#addTelefone")
        this.addEndereco = document.querySelector("#addEndereco")
        this.addCodPostal = document.querySelector("#addCodPostal")
        this.addCidade = document.querySelector("#addCidade")
        this.addTipo = document.querySelector("#addTipo")
        this.addEnrollMessage = document.querySelector("#addEnrollMessage")

        this.userEmail = this.userController.loggedUser();
        this.userData = this.userController.loggedUserData(this.userEmail);
        
        this.btnInscrever = document.querySelector("#btnInscrever")

        //this.renderTable();
        this.bindBackButton()
        this.bindAddAddEnrollForm()
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            event.preventDefault()
            history.back();
        })
    }

    bindAddAddEnrollForm() {
        this.btnInscrever.addEventListener('click', event => {
            event.preventDefault();
            const currentEvent = this.eventController.getCurrentEvent()
            try {
                this.enrollController.createEnroll(
                    this.userData.id,
                    currentEvent.id,
                    this.userData.nome,
                    this.addNrIdentidade.value,
                    this.addTelefone.value,
                    this.addEndereco.value,
                    this.addCodPostal.value,
                    this.addCidade.value,
                    this.addTipo.value
                    );
                
                if(!this.userData.listaPessoal.find(event => event.id == currentEvent.id)){
                    this.userData.listaPessoal.push(currentEvent.id)
                    this.userController.editUser(
                    this.userData.id,
                    this.userData.email,
                    this.userData.password,
                    this.userData.nome,
                    this.userData.sobrenome,
                    this.userData.localidade,
                    this.userData.genero,
                    this.userData.dataNasc,
                    this.userData.foto,
                    this.userData.tipo,
                    this.userData.estado,
                    this.userData.equipa,
                    this.userData.listaPessoal
                    );
                }
            
                this.displayAddEnrollMessage('Enroll added with success!', 'success');
                location.href = 'provas.html';

                } catch(e) {
                    this.displayAddEnrollMessage(e, 'danger');
                    event.preventDefault();
                }
            })
        }

    displayAddEnrollMessage(message, type) {
        this.addEnrollMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}
