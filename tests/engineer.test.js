const Engineer = require ("../lib/engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("github" in obj).toEqual(true);
      });
    
    });
  
  });


  