class Participant{
    constructor(name, userId, password){
        this.name = name;
        this.userId = userId;
        this._coursesTaken = [];
        this._password = password;
        return this;
    }

    get coursesTaken(){
        return this._coursesTaken;
    }

    set coursesTaken(course){
        this._coursesTaken.push(course);
    }   
    
}