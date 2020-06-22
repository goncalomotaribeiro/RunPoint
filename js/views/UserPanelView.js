import UserController from '../controllers/UserController.js'
import EventController from '../controllers/EventController.js'
import EnrollController from '../controllers/EnrollController.js'
import TeamController from '../controllers/TeamController.js'
import RatingController from '../controllers/RatingController.js'


export default class UserPanelView {

    constructor() {
        this.userController = new UserController();
        this.eventController = new EventController();
        this.enrollController = new EnrollController();
        this.teamController = new TeamController();
        this.ratingController = new RatingController();
        
        //Logout
        this.btnSair = document.querySelector("#btnSair");
        this.bindAddLogoutEvent();

        this.userEmail = this.userController.loggedUser();
        this.userData = this.userController.loggedUserData(this.userEmail);
        this.proximasProvas = document.querySelector("#listaPessoal")
        this.listaRatings = document.querySelector("#listaRatings")

        this.renderTableRatings(this.ratingController.getRatings());
        this.renderTableEvents(this.eventController.getEvents());

        //Equipa
        this.nomeEquipa = document.querySelector(".nomeEquipa")
        this.nomeEquipaMobile = document.querySelector(".nomeEquipaMobile")
        
         //Dados Utilizador
        this.nPontos = document.querySelector("#nPontos")
        this.nProvas = document.querySelector("#nProvas")
        this.nKm = document.querySelector("#nKm")
        this.fotoPerfil = document.querySelector("#image-preview")
        this.nomeUser = document.querySelector("#nomeUser");
        this.localidade = document.querySelector("#localidade");
        this.renderPesonalData();
        this.RenderPontos()
    }

    bindAddLogoutEvent(){
        this.btnSair.addEventListener('click', () =>{
            this.userController.logoutUser();
        })
    }

    RenderPontos(){
        let ratings = this.ratingController.getRatings().filter(rating => rating.id_user == this.userData.id)
        let totalPontos = 0
        for (const rating of ratings) {
            if(rating.badge == "/imgs/niveis/allstar.png"){
                totalPontos += 1500
            }else if(rating.badge == "/imgs/niveis/prime.png"){
                totalPontos += 1000
            }else if(rating.badge == "/imgs/niveis/experienced.png"){
                totalPontos += 500
            }else if(rating.badge == "/imgs/niveis/talented.png"){
                totalPontos += 250
            }else if(rating.badge == "/imgs/niveis/beginner.png"){
                totalPontos += 100
            }else if(rating.badge == "/imgs/niveis/WINNER2.png"){
                totalPontos += 2000
            }
        }
        this.nPontos.textContent = totalPontos
    }

    renderPesonalData(){
        let ratings = this.ratingController.getRatings().filter(rating => rating.id_user == this.userData.id)
        let events = this.eventController.getEvents()
        let count = 0
        let km = 0
        for (const rating of ratings) {
            const event = events.find(event => event.id == rating.id_event)
            km += +event.distancia
            count++
        }

        this.nProvas.textContent = count;
        this.nKm.textContent = km;
        this.nomeUser.textContent = this.userData.nome + " " + this.userData.sobrenome;
        this.localidade.textContent = this.userData.localidade

        if(this.userData.equipa != ""){
            this.nomeEquipa.textContent = this.userData.equipa;
            this.nomeEquipaMobile.textContent = this.userData.equipa;
        }
    }

    bindAddEnrollEvent() {
        for (const btnsInscrever of document.getElementsByClassName("inscrever")) {
            btnsInscrever.addEventListener('click', () => {
                this.eventController.setCurrentEvent(btnsInscrever.id)
                location.href = "inscrever.html"  
            })
        }
    }

    renderTableRatings(ratings = []) {
        let result = ''
        let userRatings = ratings.filter(rating => rating.id_user == this.userData.id)
        let events = this.eventController.getEvents()

        if (userRatings.length > 0) {
            for (let i = 0; i < userRatings.length; i++) {
                const rating = userRatings[i];
                const event = events.find(event => event.id == rating.id_event)
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
                                        <span class="valor">${rating.tempo}</span>
                                        <p class="categoria">Tempo</p>
                                    </div>
                                    <div class="col-6 col-xl-2 valorDiv">
                                        <img class="d-xl-none" src="/imgs/Interface/stickman.png" alt=""><br class="d-xl-none"><br class="d-xl-none">
                                        <span class="valor">${event.distancia}</span><span class="valor"> km</span>
                                        <p class="categoria">Distância</p>
                                    </div>
                                    <div class="d-xl-none col-12 valorDiv">
                                        <img src="/imgs/Interface/podio.png" alt=""><br><br>
                                    </div>
                                    <div class="col-6 col-xl-2 valorDiv">
                                        <span class="valor">${rating.class_user}</span><span class="valor"> º</span>
                                        <p class="categoria">Class. Individual</p>
                                    </div>

                                    <div class="col-6 col-xl-2 valorDiv">
                                        <span class="valor">${rating.class_team}</span><span class="valor"> º</span>
                                        <p class="categoria">Class. Equipa</p>
                                    </div>
                                    <div class="col-12 col-xl-1 mt-1 text-center">
                                        <img class="medalha" src="${rating.badge}" alt="">
                                    </div>
                                </div>
                            </div>`
            }
            this.listaRatings.innerHTML = result
        } else {
            result = `
            <div class="col-12 offset-xs-3 offset-xl-0 mt-1 text-center mt-5">
                <a href="provas.html" style="font-family: PortoSans-Regular;">Ainda sem provas concluídas</a>
            </div>`
            this.listaRatings.innerHTML = result
        }
        this.bindAddEnrollEvent();
    }

    renderTableEvents(ratings = []) {
        let result = ''
        let enrolls = this.enrollController.getEnrolls()
        if (this.userData.listaPessoal.length != 1) {
            for (let i = 1; i < this.userData.listaPessoal.length; i++) {
                const eventId = this.userData.listaPessoal[i];
    
                const event = ratings.find(prova => prova.id == eventId)
                
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
                    </div>`
                    
                    if(enrolls.some(enroll => enroll.provaId == event.id)){
                        result += `
                    <div class="col-12 col-xl-1 mt-1 text-center">
                       <a class="inscrito"><p class="inscritoText">INSCRITO</p></a> 
                    </div>`
                    }else{
                        result += `
                    <div class="col-12 col-xl-1 mt-1 text-center">
                        <a href="inscrever.html" class="inscrever" id="${event.id}"><p class="inscreverText">INSCREVER</p></a> 
                    </div>`
                    }

                  result += `
                </div>
            </div>`
            }
            this.proximasProvas.innerHTML = result
        } else {
            result = `
            <div class="col-12 offset-xs-3 offset-xl-0 mt-1 text-center mt-5">
                <a href="provas.html" style="font-family: PortoSans-Regular;">Adicione provas á sua lista</a>
            </div>`
            this.proximasProvas.innerHTML = result
        }
        this.bindAddEnrollEvent();
    }
}
