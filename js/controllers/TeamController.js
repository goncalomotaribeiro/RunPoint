import TeamModel from '../models/TeamModel.js'

export default class TeamController {
    constructor() {
        this.teamModel = new TeamModel()
    }

    createTeam(local, nome, localizacao, descricao, foto, membros) {
        if (!this.teamModel.getAll().some(team => team.nome === nome)) {
            this.teamModel.create(nome, localizacao, descricao, foto, membros);
        } else {
            throw Error(`Team already exists`);
        }
    }

    removeTeam(id) {
        this.teamModel.remove(id)
    }

    setCurrentTeam(id) {
        this.teamModel.setCurrentTeam(id)
    }

    getCurrentTeam() {
        return this.teamModel.getCurrentTeam()
    }

    getTeam(id) {
        return this.teamModel.getTeam(id)
    }

    getTeams(filterLocation='', filterName='') {

        const teams = this.teamModel.getAll()
        
        if (filterLocation==='' && filterName==='') {
            return teams
        }

        let filteredTeams = []

        for (const team of teams) {
            let filterTeamLocal = false, filterTeamName = false

            if((team.localizacao.includes(filterLocation) && filterLocation!='') || filterLocation==='') {
                filterTeamLocal = true
            }

            if((team.nome.includes(filterName) && filterName!='') || filterName==='') {
                filterTeamName = true
            }

            // Alimentar filteredTeams
            if(filterTeamLocal && filterTeamName) {
                filteredTeams.push(team)
            }
        }
        return filteredTeams
    }
}