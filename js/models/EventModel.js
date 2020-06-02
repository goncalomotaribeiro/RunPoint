export default class EventModel{
    constructor(){
        this.events = localStorage.events ? JSON.parse(localStorage.events) : [];
    }

    getAll() {
        return this.events;
    }

    create(nome, data, edicao, tipo, descricao, capacidade, local, distancia, preco, camisola, fotos, percurso, estado) {
        const event = {
            id: this.events.length > 0 ? this.events[this.events.length - 1].id + 1 : 1,
            nome: nome,
            data: data,
            edicao: edicao,
            tipo: tipo,
            descricao: descricao,
            capacidade: capacidade,
            local: local,
            distancia: distancia,
            preco: preco,
            camisola: camisola,
            fotos: fotos,
            percurso: percurso,
            estado: estado,
        }
        this.events.push(event);
        this._persist();
    }

    edit(id, nome, data, edicao, tipo, descricao, capacidade, local, distancia, preco, camisola, fotos, percurso, estado) {
        const events = this.events;

        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            if(i == id - 1){
                event.nome = nome;
                event.data = data;
                event.edicao = edicao;
                event.tipo = tipo;
                event.descricao = descricao;
                event.capacidade = capacidade;
                event.local = local;
                event.distancia = distancia;
                event.preco = preco;
                event.camisola = camisola;
                event.fotos = fotos;
                event.percurso = percurso;
                event.estado = estado;
            }
        }
        localStorage.setItem('events', JSON.stringify(events));
        location.reload();
    }

    _persist() {
        localStorage.setItem('events', JSON.stringify(this.events));
    }

    sort() {
        this.events.sort(this._compare);
        this._persist();
    }

    setCurrentEvent(id) {
        localStorage.setItem("event", id); 
    }

    getCurrentEvent() {
        return this.events.find(event => event.id === + localStorage.event)
    }

    
    getEvent(id){
        return this.events.find(event => event.id == id)
    }

    remove(id) {
        this.events = this.events.filter(event => event.id != id)
        this._persist()
    }
   
    _compare(eventA, eventB) {
        if (eventA.email < eventB.email)
            return -1;
        if (eventA.email > eventB.email)
            return 1;
        return 0;
    }
}