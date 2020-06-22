import RatingController from '../controllers/RatingController.js'
import UserController from '../controllers/UserController.js'
import EventController from '../controllers/EventController.js'

export default class RatingAdminView {

    constructor() {
        this.ratingController = new RatingController();
        this.userController = new UserController();
        this.eventController = new EventController();
        
        this.userEmail = this.userController.loggedUser();
        this.userData = this.userController.loggedUserData(this.userEmail);
        
        // Tabela
        this.tBody = document.querySelector("#tBody")
        this.btnFilter = document.querySelector("#btnFilter")
        this.btnSort = document.querySelector("#btnSort")
        this.txtProva = document.querySelector("#txtProva")

        //Form Adicionar
        this.frmNewRating = document.querySelector("#frmNewRating")
        this.sltProva = document.querySelector("#sltProva")
        this.addIdUtilizador = document.querySelector("#addIdUtilizador")
        this.addDorsal = document.querySelector("#addDorsal")
        this.addTempo = document.querySelector("#addTempo")
        this.addClassUser = document.querySelector("#addClassUser")
        this.addClassTeam = document.querySelector("#addClassTeam")
        this.addRatingMessage = document.querySelector("#addRatingMessage")
        this.btnAdicionar = document.querySelector("#btnAdicionar")

        //Form Editar
        this.btnEditar = document.querySelector("#btnEditar")
        this.modalTitle = document.querySelector("#modal-title")
        this.editId = document.querySelector("#editId")

        this.renderTable(this.ratingController.getRatings())
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        this.bindAddAddForm()
        this.bindAddEditEvent()
        this.ShowEditForm()
        this.ShowAddForm()
    }

    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {
            event.preventDefault();        
            this.renderTable(this.ratingController.getRatings(this.txtProva.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderTable(this.ratingController.getRatings(this.txtProva.value, true))
        })
    }

    bindAddRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName("remove")) {
            btnRemove.addEventListener('click', event => {
                if(confirm("Tem a certeza que pretende remover?")){
                this.ratingController.removeRating(event.target.id)
                this.renderTable(this.ratingController.getRatings(this.txtProva.value))
                }
            })
        }
    }

    ShowEditForm() {
        for (const btnEdit of document.querySelectorAll(".edit")) {
            btnEdit.addEventListener('click', event => {
            this._renderEditButton()
            this.editRating = this.ratingController.getRating(event.target.id)
            this.editId.value = event.target.id

            this.addIdUtilizador.value = this.editRating.id_user
            this.addDorsal.value = this.editRating.dorsal
            this.addTempo.value = this.editRating.tempo
            this.addClassUser.value = this.editRating.class_user
            this.addClassTeam.value = this.editRating.class_team

            let events = this.eventController.getEvents()
                let result = ''
                for (const event of events) {
                    result += `<option value="${event.id}">${event.nome}</option>`  
                }
                this.sltProva.innerHTML = result
            })
        }
    }

    _renderEditButton(){
        this.modalTitle.innerHTML = "Editar Classificação"
        this.btnEditar.style.visibility = 'visible';
        this.btnAdicionar.style.visibility = 'hidden';    
    }

    bindAddEditEvent(){
        this.btnEditar.addEventListener('click', () => {     
            try {
                this.ratingController.editRating(
                this.editId.value,
                this.sltProva.value,
                this.addIdUtilizador.value,
                this.addDorsal.value,
                this.addTempo.value,
                this.addClassUser.value,
                this.addClassTeam.value
                );
                this.displayAddRatingMessage('Rating edited with success!', 'success');

            } catch(e) {
                this.displayAddRatingMessage(e, 'danger');
                event.preventDefault();
            }
        })
        
    }

    ShowAddForm() {
        for (const btnAdd of document.getElementsByClassName("adicionar")) {
            btnAdd.addEventListener('click', event => {
                this._renderAddButton()
                this.frmNewRating.reset();
                let events = this.eventController.getEvents()
                let result = ''
                for (const event of events) {
                    result += `<option value="${event.id}">${event.nome}</option>`  
                }
                this.sltProva.innerHTML = result
            })
        }
    }

    _renderAddButton(){
        this.modalTitle.innerHTML = "Nova Classificação"
        this.btnEditar.style.visibility = 'hidden';
        this.btnAdicionar.style.visibility = 'visible';
    }

    bindAddAddForm() {
        this.btnAdicionar.addEventListener('click', () => {      
            try {
                this.ratingController.createRating(
                +this.sltProva.value,
                +this.addIdUtilizador.value,
                this.addDorsal.value,
                this.addTempo.value,
                this.addClassUser.value,
                this.addClassTeam.value,
                );
                this.displayAddRatingMessage('Rating added with success!', 'success');
            } catch(e) {
                this.displayAddRatingMessage(e, 'danger');
                event.preventDefault();
            }
        })
    }


    renderTable(ratings = []) {
        let result = ''
        for (const rating of ratings) {
            result += `
            <tr>
                <td scope="row">${rating.id}</td>
                <td>${rating.id_event}</td>
                <td>${rating.id_user}</td>
                <td>${rating.dorsal}</td>
                <td>${rating.tempo}</td>
                <td>${rating.class_user}</td>
                <td>${rating.class_team}</td>
                <td>${rating.badge}</td>
                <td><a href="" data-toggle="modal" data-target="#modelId"><img src="../imgs/Interface/editar.png" alt="" class="edit"  id="${rating.id}"></a> <a href=""><img src="../imgs/Interface/eliminar.png" alt="" id="${rating.id}" class="remove"></a></td>
            </tr>`           
        }
        this.tBody.innerHTML = result
        this.bindAddRemoveEvent()
    }

    displayAddRatingMessage(message, type) {
        this.addRatingMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

}
