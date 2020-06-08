import UserController from '../controllers/UserController.js'

export default class CriarPerfilView {

    constructor() {
        this.userController = new UserController();
        
        //Form Adicionar
        this.frmNewUser = document.querySelector("#frmNewUser")
        this.addNome = document.querySelector("#addNome")
        this.addSobrenome = document.querySelector("#addSobrenome")
        this.addLocalidade = document.querySelector("#addLocalidade")
        this.addGenero = document.querySelector("#addGenero")
        this.addFoto = document.querySelector("#file-input");
        this.addDataNasc = document.querySelector("#addDataNasc")
        this.btnCriarPerfil = document.querySelector("#btnCriarPerfil")

        this.bindAddEditEvent()
    }

    bindAddEditEvent(){
        this.btnCriarPerfil.addEventListener('click', () => {
            
            let userEmail = this.userController.loggedUser();
            let userData = this.userController.loggedUserData(userEmail);

            this.userController.editUser(
            userData.id,
            userData.email,
            userData.password,
            this.addNome.value,
            this.addSobrenome.value,
            this.addLocalidade.value,
            this.addGenero.value,
            this.addDataNasc.value,
            this.addFoto.value,
            userData.tipo,
            userData.estado,
            userData.listaPessoal
            );
        })
    }
}
