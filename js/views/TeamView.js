import TeamController from '../controllers/TeamController.js'

export default class TeamView {

    constructor() {
        this.teamController = new TeamController()

        //Catálogo das equipas
        this.cardsTotal = document.querySelector("#cardsTotal");
        this.txtLocal = document.querySelector("#txtSearch");
        this.btnSearch = document.querySelector("#btnSearch");

        this.renderTable(this.teamController.getTeams())

        this.bindAddFilterEvent()
    }

    bindAAddFilterEvent() {
        this.btnSearch.addEventListener('click', () => {
            this.renderTable(this.teamController.getTeams(this.txtLocal.value))
        })
    }

    renderTable(teams = []) {
        let result = ''
        for (const team of teams) {
            result += `
            <div class="col-xl-3 cardsEquip">
                <div class="card barraEquipa">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img src="/imgs/Interface/shirt.png" alt="" class="img-lg-responsive">
                            </div>
                            <div class="col text-center text-xl-left">
                                <h3 class="nomeEquipa">${team.nome}</h3>
                                <h5 style="font-family: PortoSans-LightItalic">Equipa</h5><br>
                                <h5 style="font-family: PortoSans-BoldItalic">${team.membros} Membros</h5>
                                <h5 style="font-family: PortoSans-LightItalic">${team.localizacao}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        this.cardsTotal.innerHTML = result
    }



}