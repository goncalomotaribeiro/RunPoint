import TeamController from '../controllers/TeamController.js'

export default class TeamView {

    constructor() {
        this.teamController = new TeamController();

        //Catálogo das equipas
        this.cardsTotal = document.querySelector("#cardsTotal");
        this.txtNome = document.querySelector("#searchNome")
        this.txtLocalizacao = document.querySelector("#searchLocal")
        this.btnProcurar = document.querySelector("#btnProcurar");
        this.btnCriarEquipa = document.querySelector("#btnCriarEquipa");

        this.renderTable(this.teamController.getTeams());

        this.bindAddFilterEvent();
        this.bindAddTeamEvent();
    }

    bindAddSeeMoreEvent() {
        document.addEventListener('click', event => {
            if(event.target && event.target.matches(".cardsEquip")){
                alert("oi")
                this.teamController.setCurrentTeam(team.target.id)  
                location.href='equipaInfo.html';
                event.preventDefault()
            }
        })
    }

    bindAddFilterEvent() {
        this.btnProcurar.addEventListener('click', () => {
            event.preventDefault();
            this.renderTable(this.teamController.getTeams(this.txtLocalizacao.value,this.txtNome.value))
        })
    }

    bindAddTeamEvent() {
        this.btnCriarEquipa.addEventListener('click', () => {
            location.href = '../html/criarEquipa.html';
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
                                <h5 style="font-family: PortoSans-BoldItalic">${team.membros}</h5>
                                <h5 style="font-family: PortoSans-LightItalic">${team.localizacao}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        this.cardsTotal.innerHTML = result
        this.bindAddSeeMoreEvent()
    }

    _renderCreateTeamButton(userIsLogged) {
        if (userIsLogged) {
            this.btnCriarEquipa.style.visibility = 'visible';
        } else {
            this.btnCriarEquipa.style.visibility = 'hidden';
        }
    }



}