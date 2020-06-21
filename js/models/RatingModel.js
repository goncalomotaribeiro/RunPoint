export default class RatingModel{
    constructor(){
        this.ratings = localStorage.ratings ? JSON.parse(localStorage.ratings) : [];
    }

    getAll() {
        return this.ratings;
    }

    create(id_event, id_user, dorsal, tempo, class_user, class_team, badge) {
        const rating = {
            id: this.ratings.length > 0 ? this.ratings[this.ratings.length - 1].id + 1 : 1,
            id_event: id_event,
            id_user: id_user,
            dorsal: dorsal,
            tempo: tempo,
            class_user: class_user,
            class_team: class_team,
            badge: badge
        }
        this.ratings.push(rating);
        this._persist();
    }

    edit(id_event, id_user, dorsal, tempo, class_user, class_team, badge) {
        const ratings = this.ratings;

        for (let i = 0; i < ratings.length; i++) {
            const rating = ratings[i];
            if(i == id - 1){
                rating.id_event = id_event;
                rating.id_user = id_user;
                rating.dorsal = dorsal;
                rating.tempo = tempo;
                rating.class_user = class_user;
                rating.class_team = class_team;
                rating.badge = badge;
            }
        }
        localStorage.setItem('ratings', JSON.stringify(ratings));
        location.reload();
    }

    _persist() {
        localStorage.setItem('ratings', JSON.stringify(this.ratings));
    }

    sort() {
        this.ratings.sort(this._compare);
        this._persist();
    }

    setCurrentRating(id) {
        localStorage.setItem("rating", id); 
    }

    getCurrentRating() {
        return this.ratings.find(rating => rating.id === + localStorage.rating)
    }

    
    getRating(id){
        return this.ratings.find(rating => rating.id == id)
    }

    remove(id) {
        this.ratings = this.ratings.filter(rating => rating.id != id)
        this._persist()
    }
   
    _compare(ratingA, ratingB) {
        if (ratingA.class_user < ratingB.class_user)
            return -1;
        if (ratingA.class_user > ratingB.class_user)
            return 1;
        return 0;
    }
}