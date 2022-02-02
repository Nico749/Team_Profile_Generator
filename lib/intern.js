const Employee = require("./employee")
class Intern extends Employee {
    constructor(name,id,email,school){
        super (name,id,email)
        this.school=school
    }
    getSchool(){}
    getRole(){
        return Intern
    }
}

// const intern=new Intern ("paul",12,"maiomail","school")
// intern.getRole()

module.exports = Intern