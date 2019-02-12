class Admin{
    constructor(name, adminId, password){
        this.name = name;
        this.adminId = adminId;
        this._password = password;
        this.lmsMaster = new LMSMaster();
    }

    adminLogin(adminId, password){
        if(adminId === this.adminId && password === this._password){
            return { result: true, message: "Logged in successfully" };
        }else if(adminId !== this.adminId && password !== this._password ){
            return { result: true, message: "Oops! Wrong UserId and Password" };
        }else if(adminId !== this.adminId){
            return { result: true, message: "Oops! Wrong UserId" };
        }else{
            return { result: true, message: "Oops! Wrong Password" };
        }
    }

    addCourse(name, description, time){
        let course = new Course(name, description, time);
        this.lmsMaster.courses = course;
        return course;
    }

    addParticipant(name, userId, password){
        let participant = new Participant(name, userId, password);
        this.lmsMaster.participants = participant;
        return participant;
    }

    assignCourse(participantId, courseId){
        let participantIndex = _.findIndex(this.lmsMaster.participants,{ userId: participantId });
        let courseIndex = _.findIndex(this.lmsMaster.courses,{ courseId: courseId });

        let course = this.lmsMaster._courses[courseIndex];
        this.lmsMaster._participants[participantIndex].coursesTaken = course;
    }
}