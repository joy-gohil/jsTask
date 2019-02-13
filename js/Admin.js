class Admin{
    constructor(name, adminId, password){
        this.name = name;
        this.adminId = adminId;
        this._password = password;
        this.lmsMaster = new LMSMaster();
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