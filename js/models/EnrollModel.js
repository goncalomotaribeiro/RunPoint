export default class EnrollModel {
    constructor() {
        this.enrolls = localStorage.enrolls ? JSON.parse(localStorage.enrolls) : [];
    }

    getAll() {
        return this.enrolls;
    }

    create(atletaId, provaId, nome, nrIdentidade, telefone, endereco, codPostal, cidade, tipo) {
        const enroll = {
            id: this.enrolls.length > 0 ? this.enrolls[this.enrolls.length - 1].id + 1 : 1,
            atletaId: atletaId,
            provaId: provaId,
            nome: nome,
            nrIdentidade: nrIdentidade,
            telefone: telefone,
            endereco: endereco,
            codPostal: codPostal,
            cidade: cidade,
            tipo: tipo
        }
        this.enrolls.push(enroll);
        this._persist();
    }

    edit(id, atletaId, provaId, nome, nrIdentidade, telefone, endereco, codPostal, cidade, tipo) {

        for (let i = 0; i < this.enrolls.length; i++) {
            const enroll = this.enrolls[i];
            
            if(i == id - 1){
                enroll.atletaId = atletaId;
                enroll.provaId = provaId;
                enroll.nome = nome;
                enroll.nrIdentidade = nrIdentidade;
                enroll.telefone = telefone;
                enroll.endereco = endereco;
                enroll.codPostal = codPostal;
                enroll.cidade = cidade;
                enroll.tipo = tipo;
            }
        }
        
        this._persist();
        location.reload();
    }

    _persist() {
        localStorage.setItem('enrolls', JSON.stringify(this.enrolls));
    }

    sort() {
        this.enrolls.sort(this._compare);
        this._persist();
    }

    setCurrentEnroll(id) {
        localStorage.setItem("enroll", id); 
    }

    getCurrentEnroll() {
        return this.enrolls.find(enroll => enroll.id === + localStorage.enroll)
    }

    
    getEnroll(id){
        return this.enrolls.find(enroll => enroll.id == id)
    }

    remove(id) {
        this.enrolls = this.enrolls.filter(enroll => enroll.id != id)
        this._persist()
    }
   
    _compare(enrollA, enrollB) {
        if (enrollA.nome < enrollB.nome)
            return -1;
        if (enrollA.nome > enrollB.nome)
            return 1;
        return 0;
    }
}
