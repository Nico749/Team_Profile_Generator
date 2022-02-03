const Employee = require ("./lib/employee")
const Engineer = require ("./lib/engineer")
const Intern = require ("./lib/intern")
const Manager = require ("./lib/manager")

const inquirer= require ('inquirer')
const fs = require ('fs')
//const myModule= require('./questions')
// const managerquestions = myModule[0]
// const engineerquestions = myModule[1]
// const internquestions = myModule[2]
//const manager =new Manager ("","","","")
const intern = new Intern("","","","")
let engineer = new Engineer("","","","") 
// initialize some variables
let team;
let manager = new Manager ("","","","")




// This function allows us to clear out the order variable
const clearTeam = () => {
  // The order will be an array containing manager objects
  team = [];

  // if we're clearing the order, we won't need the current manager, either
  clearManager();
};

// This function allows us to reset the manager object for re-use in an order
const clearManager = () => {
  // here we define an empty manager object
  manager = new Manager ("","","","")
//   {
//     name: "",
//     id: "",
//     mail: "",
//     office: "",
//   };
};

// startApp() will be how we begin the application
const startApplication = () => {
        clearTeam();
        getName();
      }
    

// this function gets the user's name and adds it to the manager object
const getName = () => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "Name:"
      },
    ])
    .then((res) => {
      manager.name = res.name;
      getId();
    });
};

// this function gets the size of the manager and adds it to the manager object
const getId = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "id:",
      },
    ])
    .then((res) => {
      manager.id = res.id;
      getMail();
    });
};

// this function gets the desired crust type and adds it to the manager object
const getMail = () => {
  inquirer
    .prompt([
      {
        name: "mail",
        type: "input",
        message: "mail:",
      },
    ])
    .then((res) => {
      manager.email = res.mail;
      getOffice();
    });
};

// this function gets the desired sauce type and adds it to the manager object
const getOffice = () => {
  inquirer
    .prompt([
      {
        name: "office",
        type: "input",
        message: "office number:",
      },
    ])
    .then((res) => {
      manager.officenumber = res.office;
      
      team.push(manager);
      anotherManager();
    });
};



// this function asks if the user wants another manager in their order
// if they do, clear the manager object and start building a new one by getting the customer's name
// if they don't print the order to the console and go back to the main menu
const anotherManager = () => {
  inquirer
    .prompt([
      {
        name: "another_member",
        type: "confirm",
        message: "Add another member?",
      },
    ])
    .then((res) => {
      if (res.another_member) {
        clearManager();
        inquirer
                  .prompt([
                    {
                      name: "start",
                      type: "list",
                      message: "Who would you like to add ?",
                      choices: ["Add an engineer", "Add an intern"],
                    },
                  ])
                  .then((res) => {
                    if (res.start === "Add an engineer") {
                        //clearManager()
                        getName()
                       
                    } else {
                      getEmail();
                      
                    }
                  });



        //getName();
      } else {
        console.log("Your team:", team);
       
      }
    });
};

// since everything is broken down in to functions, we need to actually start the application
startApplication();