class Roster {
    constructor() {
        this.season=null;
        this.players=[];
    }

    season(value){
        this.season = value;
        return this;
    }

    addPlayer(name, handicap, isActive){
        this.players.add({
            name: name,
            handicap: handicap,
            isActive: isActive
        });
        return this;
    }
}

module.exports = new Roster();