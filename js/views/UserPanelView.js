import UserController from '../controllers/UserController.js'
import EventController from '../controllers/EventController.js'

export default class UserPanelView {

    constructor() {
        this.userController = new UserController();
        this.eventController = new EventController();
        
        //Logout
        this.btnSair = document.querySelector("#btnSair");
        this.bindAddLogoutEvent();

        this.userEmail = this.userController.loggedUser();
        this.userData = this.userController.loggedUserData(this.userEmail);
        this.proximasProvas = document.querySelector("#listaPessoal")

        this.renderTable(this.eventController.getEvents());
        
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
        this.nomeUser.textContent = this.userData.nome + " " + this.userData.sobrenome;
        this.localidade.textContent = this.userData.localidade
    }

    renderTable(events = []) {
        let result = ''
        for (let i = 1; i < this.userData.listaPessoal.length; i++) {
            const eventId = this.userData.listaPessoal[i];

            const event = events.find(prova => prova.id == eventId)
            
            result += `
            <div class="list-group-item">
            <div class="row">
                <div class="col-12 col-lg-2 offset-xs-3 offset-xl-0 col-xl-1 mt-1 text-center">
                    <img class="img" src="/imgs/cartaz/cartaz.jpg" alt="">
                </div>
                <div class="col-12 col-lg-6 col-xl-2 mb-5 mb-xl-0 mt-xl-1 pt-1 text-center text-lg-left">
                    <span class="nomeProva">${event.nome}</span><br>
                    <span class="categoriaProva">${event.tipo}</span><br>
                    <span class="infoProva">Data </span><span class="infoProva2">${event.data}</span><span class="infoProva">Local </span><span class="infoProva2">${event.local}</span>
                </div>
                <div class="col-6 col-xl-2 valorDiv">
                    <img class="d-xl-none" src="/imgs/Interface/cronometro.png" alt=""><br class="d-xl-none"><br class="d-xl-none">
                    <span class="valor">-:--:--</span>
                    <p class="categoria">Tempo</p>
                </div>
                <div class="col-6 col-xl-2 valorDiv">
                    <img class="d-xl-none" src="/imgs/Interface/stickman.png" alt=""><br class="d-xl-none"><br class="d-xl-none">
                    <span class="valor">--</span><span class="valor"> km</span>
                    <p class="categoria">Distância</p>
                </div>
                <div class="d-xl-none col-12 valorDiv">
                    <img src="/imgs/Interface/podio.png" alt=""><br><br>
                </div>
                <div class="col-6 col-xl-2 valorDiv">
                    <span class="valor">--</span><span class="valor"> º</span>
                    <p class="categoria">Class. Individual</p>
                </div>

                <div class="col-6 col-xl-2 valorDiv">
                    <span class="valor">--</span><span class="valor"> º</span>
                    <p class="categoria">Class. Equipa</p>
                </div>
                <div class="col-12 col-xl-1 mt-1 text-center">
                   <a href="" class="inscrito"><p class="inscritoText">INSCRITO</p></a> 
                </div>
            </div>
        </div>`
        }
        this.proximasProvas.innerHTML = result
    }
}
