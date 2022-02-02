const Employee = require ("../lib/employee")

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("name" in obj).toEqual(true);
      });

      it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("id" in obj).toEqual(true);
      });

      it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("email" in obj).toEqual(true);
      });
    
    });
  
  });