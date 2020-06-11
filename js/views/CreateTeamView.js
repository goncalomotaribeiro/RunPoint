 import TeamController from '../controllers/TeamController.js'

 export default class CreateTeamView {
    constructor() {
         this.teamController = new TeamController();

        //Add Equipa DOM
        this.btnCriar = document.querySelector('#btnCriarEquipa');
        this.teamFoto = document.querySelector('#btnShirt');
        this.teamNome = document.querySelector('#txtNome');
        this.teamLocalizacao = document.querySelector('#sltLocalizacao');
        this.teamDescricao = document.querySelector('#txtDescricao');
        this.addTeamMessage = document.querySelector('#addTeamMessage');

        this.bindAddAddTeamForm();
    }

    bindAddAddTeamForm() {
        this.btnCriar.addEventListener('click', event => {
            event.preventDefault();


            try {
                this.teamController.createTeam(
                    'criarEquipa',
                    this.teamNome.value,
                    this.teamLocalizacao.value,
                    this.teamDescricao.value,
                    this.teamFoto.value,
                    '1'
                    );
                    this.displayAddTeamMessage('Team added with success!', 'success');
                    location.href = 'equipas.html';
    
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