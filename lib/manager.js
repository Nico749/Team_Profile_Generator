const Employee = require("./employee")
class Manager extends Employee {
    constructor(name,id,email,officenumber){
        super (name,id,email)
        this.officenumber=officenumber
    }
    getName (){}
    getId(){}
    getEmail(){}
    getRole(){
        return "Manager"
    }
}

// const manager = new Manager("","","","")
// console.log(manager)

module.exports = Manager