const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name,id,email,github){
        super (name,id,email)
        this.github=github
    }
    getGithub(){}
    getRole(){
        console.log( "Engineer")
    }
}
Engineer.prototype.printStats = function () {
    console.log(
      `Name: ${this.name}\nId: ${this.id}\nMail: ${this.email}\nGitHub:${this.github}`
    )
}
  
module.exports = Engineer
const engineer=new Engineer("paul",12,"maiomail","fakegithub")



// engineer.printStats()
// engineer.getRole()