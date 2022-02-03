const Employee = require ("./lib/employee")
const Engineer = require ("./lib/engineer")
const Intern = require ("./lib/intern")
const Manager = require ("./lib/manager")

const inquirer= require ('inquirer')
const fs = require ('fs')
const myModule= require('./questions')
const managerquestions = myModule[0]
const engineerquestions = myModule[1]
const internquestions = myModule[2]
const manager = new Manager("","","","")  
const startApp = () => {
    inquirer
      .prompt([
        {
          name: "start",
          type: "list",
          message: "What would you like to do?",
          choices: ["Add a member", "Exit"],
        },
      ])
      .then((res) => {
        if (res.start === "Exit") {
          return;
        } else {
          getName();
        }
      });
  };
  
     

const getName = () => {
inquirer
    .prompt([
        {
            name: "name",
            message: "Manager name:",
        },
        ])
            .then((res) => {
            //const manager = new Manager()
            manager.name = res.name;
            getId();
            });
};
const getId = () => {
    inquirer
      .prompt([
        {
          name: "id",
          message: "What is the id number?",
        },
      ])
      .then((res) => {
        //const manager = new Manager()
        manager.id = res.id;
        getEmail();
      });
  };

  const getEmail = () => {
    inquirer
      .prompt([
        {
          name: "mail",
          message: "What is the email?",
        },
      ])
      .then((res) => {
        //const manager = new Manager()
        manager.email = res.email;
        getOfficenumber()
      });
  };

  const getOfficenumber = () => {
    inquirer
      .prompt([
        {
          name: "officenumber",
          message: "What is the office number?",
        },
      ])
      .then((res) => {
        //const manager = new Manager()
        manager.officenumber = res.officenumber;
      });
  };

startApp()