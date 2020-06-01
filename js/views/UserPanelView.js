import UserController from '../controllers/UserController.js'

export default class UserPanelView {

    constructor() {
        this.userController = new UserController();
        
        //Logout
        this.btnSair = document.querySelector("#btnSair");
        this.bindAddLogoutEvent();
        
         //Dados Utilizador
        this.nomeUser = document.querySelector("#nomeUser");
        this.localidade = document.querySelector("#localidade");
        this.renderPesonalData();

    }

    bindAddLogoutEvent(){
        this.btnSair.addEventListener('click', () =>{
            this.userController.logoutUser();
        })
    }

    renderPesonalData(){
        let userEmail = this.userController.loggedUser();
        let userData = this.userController.loggedUserData(userEmail);
        this.nomeUser.textContent = userData.nome + " " + userData.sobrenome;
        this.localidade.textContent = userData.localidade
    }
}
