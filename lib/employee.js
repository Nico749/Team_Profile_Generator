class Employee {
    constructor (name,id,email,role){
        this.name=name
        this.id=id
        this.email=email
        this.role=role
    }
    getName(){}
    getId(){}
    getEmail(){}
    getRole(){
        return "Employee"
    }
}


module.exports = Employee

// const employee =new Employee("mark",18356,"fakemail")
// console.log(employee.email)