import TeamController from '../controllers/TeamController.js'

export default class TeamView {

    constructor() {
        this.teamController = new TeamController()

        //Catálogo das equipas
        this.main = document.querySelector("main");
        this.txtLocal = document.querySelector("txtSearch");
        this.btnSearch = document.querySelector("btnSearch");

        this.renderCardsTeam(this.teamController.getTeams())
    }

    renderCardsTeam(teams = []) {
        let result = ''

        for (const team of teams) {
            result += `<div class="row">`
            result += this._generateCard(team)
            result += `</div>`


        }

        this.main.innerHTML = result

    }

    _generateCard(team) {
        let html = `
        <div class="col-xl-3 cardsEquip">
            <div class="card barraEquipa">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <img src="${team.foto}" alt="" class="img-lg-responsive">
                        </div>
                        <div class="col text-center text-xl-left">
                            <h3 class="nomeEquipa"${team.name}</h3>
                            <h5 style="font-family: PortoSans-LightItalic">Equipa</h5><br>
                            <h5 style="font-family: PortoSans-BoldItalic">${team.membros}</h5>
                            <h5 style="font-family: PortoSans-LightItalic">${team.localizacao}</h5>
                            <small>See more</small>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        `

        return html
    }



}