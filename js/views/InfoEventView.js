import EventController from '../controllers/EventController.js'
import EnrollController from '../controllers/EnrollController.js'

export default class InfoEventView {
    constructor() {
        this.eventController = new EventController();
        this.enrollController = new EnrollController();

        this.main = document.querySelector("main")
        this.btnBack = document.querySelector(".btnBack")

        this.renderTable();
        this.bindBackButton()
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            event.preventDefault()
            history.back();
        })
    }

    renderTable() {
        const currentEvent = this.eventController.getCurrentEvent()
        let enrolls = this.enrollController.getEnrolls()
        let result = `
        <div class="container text-center">
            <img src="/imgs/cartaz/cartaz.jpg" class="img-fluid cartaz" alt="Responsive image">
        </div>
        
        <div class="container w-50 barraProva">
            <div class="row">
                <div class="col-12 offset-xl-0 col-xl-1 p-0 mb-4 text-center">
                    <img class="img-fluid" src="/imgs/Interface/shirt.png" alt="">
                </div>
                <div class="col-12 offset-xl-0 col-xl-2 p-0 mb-4 text-center mt-3">
                    <span class="infoProva mt-1">Camisola</span> <br>
                    <span class="infoProva2">Equipamento</span>
                </div>
                <div class="col-12 offset-xl-0 col-xl-2 p-0 mb-4 text-center mt-3">
                    <span class="infoProva mt-1">3/20</span> <br>
                    <span class="infoProva2">Capacidade</span>
                </div>
                <div class="col-12 offset-xl-0 col-xl-2 p-0 mb-4 text-center mt-3">
                    <span class="infoProva mt-1">${currentEvent.local}</span> <br>
                    <span class="infoProva2">Localização</span>
                </div>
                <div class="col-12 offset-xl-0 col-xl-2 p-0 mb-4 text-center mt-3">
                    <span class="infoProva mt-1">16ª</span><br>
                    <span class="infoProva2">Edição</span>
                </div>
                `
                if(!enrolls.some(enroll => enroll.provaId == currentEvent.id)){
                    result += `
                <div class="col-12 col-xl-2 offset-xl-1 d-flex align-items-center justify-content-center">
                    <a href="inscrever.html" class="btnInscrever">INSCREVER</a>
                </div>`
                }else{
                    result += `
                    <div class="col-12 col-xl-2 offset-xl-1 d-flex align-items-center justify-content-center">
                        <a class="btnInscrever">INSCRITO</a>
                    </div>`
                }
            
            result += `
            </div>
            <div class="row">
                <div class="col mt-3" id="descricao">
                    <label for="text" class="titulo">Descrição</label>
                    <div class="form-group">
                        <textarea class="form-control descricao" id="txtDescricao" rows="5" disabled></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid p-0 w-50">
            <div class="row">
                <div class="container col-11 col-xl-4 barraProva text-center">
                    <img class="mb-2" src="/imgs/Interface/calendar.png" alt=""><br>
                    <span class="titulo mt-1 col-12">3 Nov 2019-9H</span>
                    <p class="infoProva3">Data e Hora da Prova</p>
                    <img class="mb-2  mt-3" src="/imgs/Interface/location.png" alt=""><br>
                    <span class="titulo mt-1 col-12">Edifício da Alfândega</span>
                    <p class="infoProva3">Local da Partida</p>
                    <img class="mb-2  mt-3" src="/imgs/Interface/distance.png" alt=""><br>
                    <span class="titulo mt-1 col-12">42 KM</span>
                    <p class="infoProva3">Distância</p>
                </div>
                <div class="container col-11 col-xl-7 barraProva">
                    <label for="text" class="titulo mt-4">Distâncias</label>
                    <div class="row">
                        <div class="col-12 offset-xl-0 col-xl-4 p-0 mb-4 text-center mt-3">
                            <span class="infoProva mt-1">42 km</span> <br>
                            <span class="infoProva2">Maratona</span>
                        </div>
                        <div class="col-12 offset-xl-0 col-xl-4 p-0 mb-4 text-center mt-3">
                            <span class="infoProva mt-1">15 km</span> <br>
                            <span class="infoProva2">Corrida Familiar</span>
                        </div>
                        <div class="col-12 offset-xl-0 col-xl-4 p-0 mb-4 text-center mt-3 mb-3">
                            <span class="infoProva mt-1">6 km</span> <br>
                            <span class="infoProva2">Fun Race</span>
                        </div>
                    </div>
                    <label for="text" class="titulo mt-5">Preços</label>
                    <div class="row">
                        <div class="col-12 offset-xl-0 col-xl-4 p-0 mb-4 text-center mt-3">
                            <span class="infoProva mt-1">00 €</span> <br>
                            <span class="infoProva2">Maratona</span>
                        </div>
                        <div class="col-12 offset-xl-0 col-xl-4 p-0 mb-4 text-center mt-3">
                            <span class="infoProva mt-1">00 €</span> <br>
                            <span class="infoProva2">Corrida Familiar</span>
                        </div>
                        <div class="col-12 offset-xl-0 col-xl-4 p-0 mb-4 text-center mt-3">
                            <span class="infoProva mt-1">00 €</span> <br>
                            <span class="infoProva2">Fun Race</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        this.main.innerHTML = result
    }
}
