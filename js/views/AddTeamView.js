 import TeamController from '../controllers/TeamController.js'

 export default class TeamAddView {
     constructor() {
         this.teamController = new TeamController();

         //         //Add Equipa DOM
         //         this.btnCriar = document.querySelector('#btnCriar');
         //         this.teamFoto = document.querySelector('#btnShirt');
         //         this.teamNome = document.querySelector('#txtNome');
         //         this.teamLocalizacao = document.querySelector('#sltLocalizacao');
         //         this.teamDescricao = document.querySelector('#txtDescricao');
         //         this.teamMembros = document.querySelector('#txtMembros');
         //         this.addTeamMessage = document.querySelector('#addTeamMessage');

         //         this.renderAddTeamForm(this.teamController.getTeams());
         //         this.bindAddAddTeamForm();
     }

     //     bindAddAddTeamForm() {
     //         this.btnCriar.addEventListener('submit', event => {
     //             event.preventDefault();

     //             try {
     //                 this.teamController.addTeam(
     //                     this.teamFoto.value,
     //                     this.teamNome.value,
     //                     this.teamLocalizacao.value,
     //                     this.teamDescricao.value,
     //                     this.teamMembros.value
     //                 );
     //                 this.displayAddTeamMessage('Equipa criada com sucesso!', 'success');

     //                 // Espera de 1 segundos antes de enviar para o catálogo das equipas, 
     //                 //para que o user possa ver a mensagem de sucesso da criação de equipa
     //                 setTimeout(() => {
     //                         location.href = '../html/equipas.html';
     //                     },
     //                     1000);
     //             } catch (e) {
     //                 this.displayAddBandMessage(e, 'danger');
     //             }
     //         });
     //     }

     //     displayAddTeamMessage(message, type) {
     //         this.addTeamMessage.innerHTML =
     //             `<div class="alert alert-${type}" role="alert">${message}</div>`;
     //     }

     //displayTeamImage(){      
     //    this.teamFoto.onchange =  evt => {
     //        let tgt = evt.target || window.event.srcElement,
     //            files = tgt.files;

     //        if (FileReader && files && files.length) {
     //            let fr = new FileReader();
     //            fr.onload = function () {
     //                document.querySelector('#imagePreview').src = fr.result;
     //            }
     //            fr.readAsDataURL(files[0]);
     //        }
     //    }
     //}

 }