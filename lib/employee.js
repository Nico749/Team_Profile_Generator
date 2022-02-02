class Employee {
    constructor (name,id,email){
        this.name=name
        this.id=id
        this.email=email
    }
    getName(){}
    getId(){}
    getEmail(){}
    getRole(){
        return Employee
    }
}


module.exports = Employee

// const employee =new Employee("mark",18356,"fakemail")
// console.log(employee.email)