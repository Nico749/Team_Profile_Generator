const Employee = require ("./lib/employee")
const Engineer = require ("./lib/engineer")
const Intern = require ("./lib/intern")
const Manager = require ("./lib/manager")

const inquirer= require ('inquirer')
const fs = require ('fs')

let intern = new Intern("","","","")
let engineer = new Engineer("","","","") 
let manager = new Manager ("","","","")
let team;

//  allows us to clear out the team variable
const clearTeam = () => {
  team = [];
  // if we're clearing the team, we won't need the current manager, either
  clearManager();
};

// allows us to reset the manager object for re-use in an order
const clearManager = () => {
  // here we define an empty manager object
  manager = new Manager ("","","","")
  engineer = new Engineer("","","","")
  intern = new Intern("","","","")
};

// startApplication() will be how we begin the application
const startApplication = () => {
        clearTeam();
        //manager.getRole()
        getName();
      }
    
//  gets the user's name and adds it to the manager object
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

//  gets the id of the manager and adds it to the manager object
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

//  gets the mail type and adds it to the manager object
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
      manager.officenumber = res.office
      
      team.push(manager)
      anotherMember()
    });
};

const getEngName = () => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "Name:"
      },
    ])
    .then((res) => {
      engineer.name = res.name;
      getEngId();
    });
};

//  gets the id of the manager and adds it to the manager object
const getEngId = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "id:",
      },
    ])
    .then((res) => {
      engineer.id = res.id;
      getEngMail();
    });
};

//  gets the mail type and adds it to the manager object
const getEngMail = () => {
  inquirer
    .prompt([
      {
        name: "mail",
        type: "input",
        message: "mail:",
      },
    ])
    .then((res) => {
      engineer.email = res.mail;
      getGitHub();

    });
};
const getGitHub = () => {
  inquirer
    .prompt([
      {
        name: "git",
        type: "input",
        message: "github:",
      },
    ])
    .then((res) => {
      engineer.github = res.git;
      team.push(engineer)
      anotherMember();

    });
}

const getIntName = () => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "Name:"
      },
    ])
    .then((res) => {
      intern.name = res.name;
      getIntId();
    });
};

//  gets the id of the manager and adds it to the manager object
const getIntId = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "id:",
      },
    ])
    .then((res) => {
      intern.id = res.id;
      getIntMail();
    });
};

//  gets the mail type and adds it to the manager object
const getIntMail = () => {
  inquirer
    .prompt([
      {
        name: "mail",
        type: "input",
        message: "mail:",
      },
    ])
    .then((res) => {
      intern.email = res.mail;
      getSchool();

    });
};
const getSchool = () => {
  inquirer
    .prompt([
      {
        name: "school",
        type: "input",
        message: "school:",
      },
    ])
    .then((res) => {
      intern.school = res.school;
      team.push(intern)
      anotherMember();

    });
}
const anotherMember = () => {
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
        //clearManager();
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
              let engineer = new Engineer("","","","")
              getEngName()
             
            }
            else {
              let intern = new Intern("","","","")
              getIntName()
            }
          });

      } else {
        console.log("Your team:", team)

      }
    })
}




startApplication();

