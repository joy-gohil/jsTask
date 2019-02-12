class Storage{

    constructor(){
        if(Storage.exists){
            return Storage.instance;
        }
        this._sessionId = null;
        this._sessionType = null;
        this._sessionName = null;
        Storage.instance=this;
        Storage.exists = true;
    }

    getSession(){
        return { id: this._sessionId, type: this._sessionType, name: this._sessionName };
    }

    setSession(...sessionData){
        this._sessionId = sessionData[0];
        this._sessionName = sessionData[1];
        this._sessionType = sessionData[2];
    }

    getCoursesData(){
        let coursesData = JSON.parse(localStorage.getItem('courses'));
        return coursesData;
    }

    getAdminsData(){
        let adminsData = JSON.parse(localStorage.getItem('admins'));
        return adminsData;
    }

    getParticipantsData(){
        let participantsData = JSON.parse(localStorage.getItem('participants'));
        return participantsData;
    }
    
    setCoursesData(coursesData){
        localStorage.setItem('courses', JSON.stringify(coursesData));
    }

    setAdminsData(adminsData){
        localStorage.setItem('admins', JSON.stringify(adminsData));
    }

    setParticipantsData(participantsData){
        localStorage.setItem('participants', JSON.stringify(participantsData));
    }
}