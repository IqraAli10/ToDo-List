import inquirer from "inquirer"
let todos: string[] =[];
let condition = true;



while(condition){
let addtask = await inquirer.prompt(
    [
        {
            name: "todo",
            type:"input",
            message: "what do you want to add in your Todo list?"
        },
        {

            name:"Addmore",
            type:"confirm",
            message:"Do you want to add more in your Todo list?",
            default: false
        }
    ]
);
todos.push(addtask.todo)
condition = addtask.Addmore
console.log(todos);
}
 











