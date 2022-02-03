const managerquestions =[{
    type:'input',
    name:'name',
    message:'Manager name: '
},
{   
    type:'input',
    name:'id',
    message:'What is the ID number?'
},
{
    type:'input',
    name:'mail',
    message:'What is the mail address?'
},
{
    type:'input',
    name:'officenumber',
    message:'What is the office number?'
},
{
    type:'list',
    name:'role',
    message:'Do you want to add an engineer, an intern or you are done?',
    choices:['Engineer','Intern','Finished']
}]

const engineerquestions =[{
    type:'input',
    name:'name',
    message:'Engineer name: '
},
{   
    type:'input',
    name:'id',
    message:'What is the ID number?'
},
{
    type:'input',
    name:'mail',
    message:'What is the mail address?'
},
{
    type:'input',
    name:'github',
    message:'What is the GitHub profile?'
}]

const internquestions =[{
    type:'input',
    name:'name',
    message:'Intern name: '
},
{   
    type:'input',
    name:'id',
    message:'What is the ID number?'
},
{
    type:'input',
    name:'mail',
    message:'What is the mail address?'
},
{
    type:'input',
    name:'school',
    message:'What is the name of the school?'
}]



module.exports =[ managerquestions,engineerquestions,internquestions]
