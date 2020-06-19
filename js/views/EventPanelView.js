import EventController from '../controllers/EventController.js'
import UserController from '../controllers/UserController.js'

export default class EventPanelView {
    constructor() {
        this.eventController = new EventController();
        this.userController = new UserController();

        this.btnAdd = document.querySelector(".btnAdd")
        this.main = document.querySelector("main")

        this.btnFilter = document.querySelector("#btnFilter")
        this.txtLocalizacao = document.querySelector("#search2")
        this.sltType = document.querySelector("#sltType")

        this.userEmail = this.userController.loggedUser();
        this.userData = this.userController.loggedUserData(this.userEmail);

        this.renderTable(this.eventController.getEvents());
        this.bindAddFilterEvent()
    }

    bindAddSeeMoreEvent() {
        document.addEventListener('click', event => {
            if(event.target && event.target.matches("a.btnVerMais")){
                this.eventController.setCurrentEvent(event.target.id)  
                location.href='infoProva.html';
                event.preventDefault()
            }
        })
    }

    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {
            event.preventDefault();        
            this.renderTable(this.eventController.getEvents(this.txtLocalizacao.value, this.sltType.value))
        })
    }

    bindAddEditEvent(){
        document.addEventListener('click',event => {
                if(event.target && event.target.matches("img.btnAdd")){
                    this.userData.listaPessoal.push(event.target.id)
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
                    this.userData.equipa,
                    this.userData.listaPessoal
                    );
                }
        })
    }

    bindAddRemoveEvent(){
        document.addEventListener('click',event => {
                if(event.target && event.target.matches("img.btnRemove")){
                    let novaLista = this.userData.listaPessoal.filter(item => item != event.target.id)
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
                    this.userData.equipa,
                    novaLista
                    );
                }
        })
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
                        <span class="infoProva">Tipo </span><span class="infoProva2">${event.tipo}</span><br>`

                            let btnLista = `<a href="" class="btnAdd"><img id="${event.id}" class="btnAdd img-lg-responsive" src="/imgs/Interface/adicionar2.png"></a><span class="infobtn d-none d-md-inline ">CLICA PARA ADICIONARES ÀS TUAS PROVAS</span>`
                           
                            for (let i = 1; i < this.userData.listaPessoal.length; i++) {
                                const prova = this.userData.listaPessoal[i];
                                if(prova == event.id){
                                    btnLista = `<a href="" class="btnRemove"><img id="${event.id}" class="btnRemove img-lg-responsive" src="/imgs/Interface/eliminar.png"></a>`
                                }
                            }

                    result += btnLista
                    result += `</div>
                    <div class="col-12 col-xl-3 offset-xl-0 col-xl-2 p-0 mt-xl-5 text-center">
                        <a href="" id="${event.id}" class="btnVerMais">VER MAIS</a>
                    </div>
                </div>
            </div>`            
        }
        this.main.innerHTML = result
        this.bindAddEditEvent()
        this.bindAddRemoveEvent()
        this.bindAddSeeMoreEvent()
    }
}
