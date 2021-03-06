import EventController from '../controllers/EventController.js'

export default class UserAdminView {

    constructor() {
        this.eventController = new EventController();
        
        // Tabela
        this.tBody = document.querySelector("#tBody")
        this.btnFilter = document.querySelector("#btnFilter")
        this.btnSort = document.querySelector("#btnSort")
        this.txtNome = document.querySelector("#txtNome")
        this.sltType = document.querySelector("#sltType")

        //Form Adicionar
        this.frmNewUser = document.querySelector("#frmNewUser")
        this.addEmail = document.querySelector("#addEmail")
        this.addPassword = document.querySelector("#addPassword")
        this.addPassword2 = document.querySelector("#addPassword2")
        this.addNome = document.querySelector("#addNome")
        this.addSobrenome = document.querySelector("#addSobrenome")
        this.addLocalidade = document.querySelector("#addLocalidade")
        this.addGenero = document.querySelector("#addGenero")
        this.addFoto = document.querySelector("#file-input");
        this.addDataNasc = document.querySelector("#addDataNasc")
        this.addChxAdmin = document.querySelector("#addChxAdmin")
        this.addChxEstado = document.querySelector("#addChxEstado")
        this.addUserMessage = document.querySelector("#addUserMessage")
        this.btnAdicionar = document.querySelector("#btnAdicionar")

        //Form Editar
        this.btnEditar = document.querySelector("#btnEditar")
        this.modalTitle = document.querySelector("#modal-title")
        this.editId = document.querySelector("#editId")

        this.renderTable(this.eventController.getEvents())
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        this.bindAddAddForm()
        this.displayUserImage()
        this.bindAddEditEvent()
        this.ShowEditForm()
        this.ShowAddForm()
    }

    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {
            event.preventDefault();        
            this.renderTable(this.eventController.getUsers(this.txtNome.value, this.sltType.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderTable(this.eventController.getUsers(this.txtNome.value, this.sltType.value, true))
        })
    }

    bindAddRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName("remove")) {
            btnRemove.addEventListener('click', event => {
                if(confirm("Tem a certeza que pretende remover?")){
                this.eventController.removeUser(event.target.id)
                this.renderTable(this.eventController.getUsers(this.txtNome.value, this.sltType.value))
                }
            })
        }
    }

    ShowEditForm() {
        for (const btnEdit of document.querySelectorAll(".edit")) {
            btnEdit.addEventListener('click', event => {
            this._renderEditButton()
            this.editUser = this.eventController.getUser(event.target.id)
            this.editId.value = event.target.id
            this.addEmail.value = this.editUser.email
            this.addPassword.value = this.editUser.password
            this.addPassword2.value = this.editUser.password
            this.addNome.value = this.editUser.nome
            this.addSobrenome.value = this.editUser.sobrenome
            this.addLocalidade.value = this.editUser.localidade
            this.addGenero.value = this.editUser.genero
            this.addDataNasc.value = this.editUser.dataNasc
            this.editUser.tipo == 'admin' ? this.addChxAdmin.checked = true : this.addChxAdmin.checked = false
            this.editUser.estado == 'ativo' ? this.addChxEstado.checked = true : this.addChxEstado.checked = false
            document.querySelector('#imagePreview').src = this.editUser.foto;
            })
        }
    }

    _renderEditButton(){
        this.modalTitle.innerHTML = "Editar Utilizador"
        this.btnEditar.style.visibility = 'visible';
        this.btnAdicionar.style.visibility = 'hidden';    
    }

    bindAddEditEvent(){
        this.btnEditar.addEventListener('click', () => {     
            try {
                if (this.addPassword.value !==this.addPassword2.value) {
                    throw Error('Password and Confirm Password are not equal');   
                }
                this.eventController.editUser(
                this.editId.value,
                this.addEmail.value,
                this.addPassword.value,
                this.addNome.value,
                this.addSobrenome.value,
                this.addLocalidade.value,
                this.addGenero.value,
                this.addDataNasc.value,
                this.addFoto.value,
                this.addChxAdmin.checked ? 'admin' : 'comum',
                this.addChxEstado.checked ? 'ativo' : 'bloqueado'
                );
                this.displayAddUserMessage('User edited with success!', 'success');

            } catch(e) {
                this.displayAddUserMessage(e, 'danger');
                event.preventDefault();
            }
        })
        
    }

    ShowAddForm() {
        for (const btnAdd of document.getElementsByClassName("adicionar")) {
            btnAdd.addEventListener('click', event => {
                this._renderAddButton()
                this.frmNewUser.reset();
                document.querySelector('#imagePreview').src = '../imgs/Interface/fotoPerfil.png';
            })
        }
    }

    _renderAddButton(){
        this.modalTitle.innerHTML = "Novo Utilizador"
        this.btnEditar.style.visibility = 'hidden';
        this.btnAdicionar.style.visibility = 'visible';
    }

    bindAddAddForm() {
        this.btnAdicionar.addEventListener('click', () => {      
            try {
                if (this.addPassword.value !==this.addPassword2.value) {
                    throw Error('Password and Confirm Password are not equal');   
                }
                this.eventController.createUser(
                this.addEmail.value,
                this.addPassword.value,
                this.addNome.value,
                this.addSobrenome.value,
                this.addLocalidade.value,
                this.addGenero.value,
                this.addDataNasc.value,
                this.addFoto.value,
                this.addChxAdmin.checked ? 'admin' : 'comum',
                this.addChxEstado.checked ? 'ativo' : 'bloqueado'
                );
                this.displayAddUserMessage('User added with success!', 'success');

            } catch(e) {
                this.displayAddUserMessage(e, 'danger');
                event.preventDefault();
            }
        })
    }


    renderTable(events = []) {
        let result = ''
        for (const event of events) {
            result += `
            <tr>
                <td scope="row">${event.id}</td>
                <td>${event.nome}</td>
                <td>${event.data}</td>
                <td>${event.edicao}</td>
                <td>${event.tipo}</td>
                <td>${event.local}</td>
                <td><button id="${event.id}" class="btn dados">Detalhes</button> <button id="${event.id}" class="btn stats">Estatísticas</button></td>
                <td><a href="" data-toggle="modal" data-target="#modelId"><img src="../imgs/Interface/editar.png" alt="" class="edit"  id="${event.id}"></a> <a href=""><img src="../imgs/Interface/eliminar.png" alt="" id="${event.id}" class="remove"></a></td>
            </tr>`           
        }
        this.tBody.innerHTML = result
        this.bindAddRemoveEvent()
    }

    displayAddUserMessage(message, type) {
        this.addUserMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    displayUserImage(){      
        this.addFoto.onchange =  evt => {
            let tgt = evt.target || window.event.srcElement,
                files = tgt.files;
        
            if (FileReader && files && files.length) {
                let fr = new FileReader();
                fr.onload = function () {
                    document.querySelector('#imagePreview').src = fr.result;
                }
                fr.readAsDataURL(files[0]);
            }
        }
    }


}
