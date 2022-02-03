const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name,id,email,github){
        super (name,id,email)
        this.github=github
    }
    getGithub(){}
    getRole(){
        return "Engineer"
    }
}

// const engineer=new Engineer("paul",12,"maiomail","fakegithub")
// console.log(engineer)

module.exports = Engineer