import UserView from './views/UserView.js'
import UserAdminView from './views/UserAdminView.js'
import UserPanelView from './views/UserPanelView.js'
import EventPanelView from './views/EventPanelView.js'
import EventAdminView from './views/EventAdminView.js'
import TeamView from './views/TeamView.js'

class App {
    constructor() {
        this.routes = {
            '': [
                UserView,
            ],
            'index': [
                UserView,
            ],
            'utilizadoresAdmin': [
                UserAdminView,
            ],
            'painel': [
                UserPanelView
            ],
            'provas': [
                EventPanelView
            ],
            'provasAdmin': [
                EventAdminView
            ],
            'equipas': [
                TeamView
            ]
        };

        // import dummy data for testing purposes
        this._importDataFixtures();

        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }

    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }

    _importDataFixtures() {
        const events = [{
                    id: 1,
                    nome: 'Meia Maratona do Porto',
                    data: '13/01/2020',
                    edicao: '1ª',
                    tipo: 'Maratona',
                    descricao: 'Muito cool pessoal',
                    capacidade: '1000',
                    local: 'Porto',
                    distancia: '40',
                    preco: '180',
                    camisola: 'camisola',
                    fotos: 'fotos',
                    percurso: 'percurso',
                    estado: 'estado'
                },
                {
                    id: 2,
                    nome: 'Meia Maratona do Porto',
                    data: '13/01/2020',
                    edicao: '1ª',
                    tipo: 'Maratona',
                    descricao: 'Muito cool pessoal',
                    capacidade: '1000',
                    local: 'Porto',
                    distancia: '40',
                    preco: '180',
                    camisola: 'camisola',
                    fotos: 'fotos',
                    percurso: 'percurso',
                    estado: 'estado'
                },
                {
                    id: 3,
                    nome: 'Meia Maratona do Porto',
                    data: '13/01/2020',
                    edicao: '1ª',
                    tipo: 'Maratona',
                    descricao: 'Muito cool pessoal',
                    capacidade: '1000',
                    local: 'Porto',
                    distancia: '40',
                    preco: '180',
                    camisola: 'camisola',
                    fotos: 'fotos',
                    percurso: 'percurso',
                    estado: 'estado'
                },
                {
                    id: 4,
                    nome: 'Meia Maratona do Porto',
                    data: '13/01/2020',
                    edicao: '1ª',
                    tipo: 'Maratona',
                    descricao: 'Muito cool pessoal',
                    capacidade: '1000',
                    local: 'Porto',
                    distancia: '40',
                    preco: '180',
                    camisola: 'camisola',
                    fotos: 'fotos',
                    percurso: 'percurso',
                    estado: 'estado'
                }
            ]

            const teams = [{
                id: 1,
                nome: 'Bolt Runners',
                localizacao: 'Porto',
                descricao: 'Equipa Fixe',
                foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                membros: '3 Membros'
            },
            {
                id: 2,
                nome: 'RunPorto',
                localizacao: 'Gaia',
                descricao: 'Equipa 2 Fixe',
                foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                membros: '2 Membros'
            },
            {
                id: 3,
                nome: 'Bolt Runners',
                localizacao: 'Porto',
                descricao: 'Equipa Fixe',
                foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                membros: '3 Membros'
            },
            {
                id: 4,
                nome: 'Bolt Runners',
                localizacao: 'Porto',
                descricao: 'Equipa Fixe',
                foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                membros: '3 Membros'
            },
            {
                id: 5,
                nome: 'Bolt Runners',
                localizacao: 'Porto',
                descricao: 'Equipa Fixe',
                foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                membros: '3 Membros'
            },
        ]
            // Load the fixtures in case there is no data in the local storage 
        if (!localStorage.teams) {
            localStorage.setItem('teams', JSON.stringify(teams));
        }
            // Load the fixtures in case there is no data in the local storage 
        if (!localStorage.events) {
            localStorage.setItem('events', JSON.stringify(events));
        }
        
        let users = []
            // Load the fixtures in case there is no data in the local storage 
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    };

}

new App();