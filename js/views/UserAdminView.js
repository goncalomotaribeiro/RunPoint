import UserController from '../controllers/UserController.js'

export default class UserAdminView {

    constructor() {
        this.userController = new UserController();
        
        // Tabela
        this.tBody = document.querySelector("#tBody")
        this.btnFilter = document.querySelector("#btnFilter")
        this.btnSort = document.querySelector("#btnSort")
        this.txtEmail = document.querySelector("#txtEmail")
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

        this.renderTable(this.userController.getUsers())
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        this.bindAddAddForm()
        this.displayUserImage()
    }

    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {
            event.preventDefault();        
            this.renderTable(this.userController.getUsers(this.txtEmail.value, this.sltType.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderTable(this.userController.getUsers(this.txtEmail.value, this.sltType.value, true))
        })
    }

    bindAddRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName("remove")) {
            btnRemove.addEventListener('click', event => {
                if(confirm("Tem a certeza que pretende remover?")){
                this.userController.removeUser(event.target.id)
                this.renderTable(this.userController.getUsers(this.txtEmail.value, this.sltType.value))
                }
            })
        }
    }

    bindAddAddForm() {
        this.frmNewUser.addEventListener('submit', () => {      
            try {
                if (this.addPassword.value !==this.addPassword2.value) {
                    throw Error('Password and Confirm Password are not equal');   
                }
                this.userController.createUser(
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

    renderTable(users = []) {
        let result = ''
        for (const user of users) {
            result += `
            <tr>
                <td scope="row">${user.id}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.tipo}</td>
                <td>${user.estado}</td>
                <td><button id="${user.id}" class="btn dados">Dados Pessoais</button> <button id="${user.id}" class="btn stats">Estatísticas</button></td>
                <td><a href=""><img src="../imgs/Interface/editar.png" alt="" class="edit"></a> <a href=""><img src="../imgs/Interface/eliminar.png" alt="" id="${user.id}" class="remove"></a></td>
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
        
            // FileReader support
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
