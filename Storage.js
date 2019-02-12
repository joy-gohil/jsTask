class Storage{

    constructor(){
        if(Storage.exists){
            return Storage.instance;
        }
        Storage.instance=this;
        Storage.exists = true;
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