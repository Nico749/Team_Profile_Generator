const Intern = require ("../lib/intern")

describe("Intern", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("school" in obj).toEqual(true);
      });
    
    });
  
  });
