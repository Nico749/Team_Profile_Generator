const Manager = require ("../lib/manager")

describe("Manager", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'officenumber' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("officenumber" in obj).toEqual(true);
      });
    
    });
  
  });
