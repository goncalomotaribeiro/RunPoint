export default class EventModel {
    constructor() {
        this.teams = localStorage.teams ? JSON.parse(localStorage.teams) : [];
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
    }
}