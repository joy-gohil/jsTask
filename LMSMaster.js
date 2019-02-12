class LMSMaster{ /* Design Pattern: This is a Singleton class */

	constructor(){
		if (LMSMaster.exists) {
			return LMSMaster.instance;
		}

		LMSMaster.instance=this;
		LMSMaster.exists = true;
		LMSMaster.storage = new Storage();
		
		this._courses = (LMSMaster.storage.getCoursesData() != null ) ? LMSMaster.storage.getCoursesData : [];
		this._admins = (LMSMaster.storage.getAdminsData() != null ) ? LMSMaster.storage.getCoursesData : [];
		this._participants = (LMSMaster.storage.getParticipantsData() != null ) ? LMSMaster.storage.getCoursesData : [];
		return LMSMaster.instance;
	}

	/* START: Getter and Setters: 
		* Courses, Admins, Participants 
		*/

	get courses(){
		return this._courses;
	}

	set courses(course){
		this._courses.push(course);
	}

	get admins(){
		return this._admins;
	}

	set admins(admin){
		this._admins.push(admin);
	}

	get participants(){
		return this._participants;
	}

	set participants(participant){
		this._participants.push(participant);	
	}

	/* END: Getter and Setters: 
		* Courses, Admins, Participants 
		*/

}