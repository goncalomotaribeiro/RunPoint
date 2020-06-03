import TeamModel from '../models/TeamModel.js'

export default class TeamController {
    constructor() {
        this.teamModel = new TeamModel()
    }

    getTeams(filterLocal = '', isSorted = false) {

        if (isSorted) {
            this.teamModel.sort()
        }

        const teams = this.teamModel.getAll()

        if (filterLocal === '') {
            return teams
        }

        let filteredTeams = []

        for (const team of teams) {
            let filterTeamLocal = false

            if ((team.localizacao.includes(filterLocal) && filterLocal != '') || filterLocal === '') {
                filterTeamLocal = true
            }

            // Alimentar filteredTeams
            if (filterTeamLocal) {
                filteredTeams.push(team)
            }
        }

        return filteredTeams

    }
}