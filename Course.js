class Course{
    constructor(name, description, time){
    	if(Course.ID){
    		this.courseId = ++Course.ID;
    	}else{
    		Course.ID = 0;
    		this.courseId = ++Course.ID;
    	}
        this.name = name;
        this.description = description;
        this.time = time;
        return this;
    }
}