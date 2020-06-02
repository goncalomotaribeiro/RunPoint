import EventController from '../controllers/EventController.js'

export default class EventPanelView {
    constructor() {
        this.eventController = new EventController();

        this.main = document.querySelector("main")

        this.renderTable(this.eventController.getEvents());
    }

    renderTable(events = []) {
        let result = ''
        for (const event of events) {
            result += `
            <div class="container w-50 barraProva">
                <div class="row">
                    <div class="col-12 col-xl-2 offset-xl-0 col-xl-2 p-0 mb-4 text-center">
                        <img class="img" src="/imgs/cartaz/cartaz.jpg" alt="">
                    </div>
                    <div class="col-12 col-xl-7 mb-3 mb-xl-0 mt-xl-1 pt-1 text-center text-xl-left">
                        <span class="nomeProva mt-1">${event.nome}</span><br>
                        <span class="infoProva">Data </span><span class="infoProva2">${event.data}</span><br class="d-xl-none">
                        <span class="infoProva">Local </span><span class="infoProva2">${event.local}</span><br class="d-xl-none">
                        <span class="infoProva">Tipo </span><span class="infoProva2">${event.tipo}</span><br>
                        <a href="#" class="btnAdd"><img class="img-lg-responsive" src="/imgs/Interface/adicionar2.png"></a><span class="infobtn d-none d-md-inline ">CLICA PARA ADICIONARES ÀS TUAS PROVAS</span>
                    </div>
                    <div class="col-12 col-xl-3 offset-xl-0 col-xl-2 p-0 mt-xl-5 text-center">
                        <a href="#" class="btnVerMais">VER MAIS</a>
                    </div>
                </div>
            </div>`           
        }
        this.main.innerHTML = result
    }


}
