class Participant{
    constructor(name, uuserId, password){
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
    
    participantLogin(userId, password){
        if(userId === this.userId && password === this._password){
            return { result: true, message: "Logged in successfully" };
        }else if(userId !== this.userId && password !== this._password ){
            return { result: true, message: "Oops! Wrong UserId and Password" };
        }else if(userId !== this.userId){
            return { result: true, message: "Oops! Wrong UserId" };
        }else{
            return { result: true, message: "Oops! Wrong Password" };
        }
    }
}