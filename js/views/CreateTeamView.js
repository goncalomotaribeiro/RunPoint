 import TeamController from '../controllers/TeamController.js'
 import UserController from '../controllers/UserController.js'

 export default class CreateTeamView {
    constructor() {
         this.teamController = new TeamController();
         this.userController = new UserController();

        this.userEmail = this.userController.loggedUser();
        this.userData = this.userController.loggedUserData(this.userEmail);

        this.btnBack = document.querySelector(".btnBack")

        //Add Equipa DOM
        this.btnCriar = document.querySelector('#btnCriarEquipa');
        this.teamFoto = document.querySelector('#btnShirt');
        this.teamNome = document.querySelector('#txtNome');
        this.teamLocalizacao = document.querySelector('#sltLocalizacao');
        this.teamDescricao = document.querySelector('#txtDescricao');
        this.addTeamMessage = document.querySelector('#addTeamMessage');

        this.bindAddAddTeamForm();
        this.bindBackButton();
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            event.preventDefault()
            history.back();
        })
    }

    bindAddAddTeamForm() {
        this.btnCriar.addEventListener('click', event => {
            try {
                    if(this.userData.equipa == "" && this.teamNome.value != ""){
                        this.teamController.createTeam(
                        this.teamNome.value,
                        this.teamLocalizacao.value,
                        this.teamDescricao.value,
                        this.teamFoto.value,
                        '1'+ ' Membros'
                        );

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
                            this.teamNome.value,
                            this.userData.listaPessoal
                        );
                        this.displayAddTeamMessage('Team added with success!', 'success');
                        location.href = 'equipas.html';
                    }else{
                        this.displayAddTeamMessage('Already in a Team!', 'danger');
                    }
    
                } catch(e) {
                    this.displayAddTeamMessage(e, 'danger');
                    event.preventDefault();
                }
            })
        }

    displayAddTeamMessage(message, type) {
        this.addTeamMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
 }