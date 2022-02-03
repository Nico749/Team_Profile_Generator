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

// const manager = new Manager("jack",1234,"mail.mail",12)
// console.log(manager)

module.exports = Manager