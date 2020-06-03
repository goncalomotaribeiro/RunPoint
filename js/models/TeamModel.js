export default class TeamModel {
    constructor() {
        this.teams = localStorage.teans ? JSON.parse(localStorage.teams) : [];
    }

    getAll() {
        return this.teams;
    }

    create(nome, localizacao, descricao, foto, membros) {
            const team = {
                id: this.teams.length > 0 ? this.teams[this.teams.length - 1].id + 1 : 1,
                nome: nome,
                localizacao: localizacao,
                descricao: descricao,
                foto: foto,
                membros: membros
            }

            this.teams.push(team);
            this._persist();
        }
        /*
            edit(nome, localizacao, descricao, foto, membros) {
                const teams = this.teams;

                for (let i = 0; i < teams.length; i++) {
                    const team = teams[i];
                    if (i == id - 1) {
                        team.nome = nome;
                        team.localizacao = localizacao;
                        team.descricao = descricao;
                        team.foto = foto;
                        team.membros = membros;
                    }
                }
                localStorage.setItem('teams', JSON.stringify(teams));
                location.reload();
            }
        */

    _persist() {
        localStorage.setItem('teams', JSON.stringify(this.teams));
    }

    sort() {
        this.teams.sort(this._compare);
        this._persist();
    }

    setCurrentTeam(id) {
        localStorage.setItem("team", id);
    }

    getCurrentTeam() {
        return this.teams.find(team => team.id === +localStorage.team)
    }


    getTeams(id) {
        return this.teams.find(team => team.id == id)
    }

    remove(id) {
        this.teams = this.teams.filter(team => team.id != id)
        this._persist()
    }

    _compare(teamA, teamB) {
        if (teamA.localizacao < teamB.localizacao)
            return -1;
        if (teamA.localizacao > teamB.localizacao)
            return 1;
        return 0;
    }
}