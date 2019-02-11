class LMSMaster{ /* Design Pattern: This is a Singleton class */

	constructor(){
		if (LMSMaster.exists) {
			return LMSMaster.instance;
		}

		LMSMaster.instance=this;
		LMSMaster.exists = true;
		this._courses = [];
		this._admins = [];
		this._participants = [];

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