// const filesystem = require("./node_modules/graceful-fs/graceful-fs");
const fs=require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");
const SVG = require("./svg");
class CLI {
    run(){ 
        return inquirer.prompt([
            {

                type: "list",
                name: "shape",
                message: "What shape would you like to draw?",
                choices: ["Circle", "Square", "Triangle"]
            },
            {
                type: "input",
                name: "shapeColor",
                message: "What color would you like to make your shape?",

            },
            {
                type: "input",
                name: "text",
                message: "What text would you like to add to your shape?Can only be up to 3 characters.",
            },
            {
                type: "input",
                name: "textColor",
                message: "What color would you like to make your text?",
            },
        ])
        .then(answers => {
            let newShape;
            if (answers.shape === "Circle") {
                newShape = new Circle();
            }
            else if (answers.shape === "Square") {
                newShape = new Square();
            }
            else if (answers.shape === "Triangle") {
                newShape = new Triangle();
            }
            newShape.setColor(answers.shapeColor);
            const setSVG=new SVG();
            setSVG.addShape(newShape);
            setSVG.addText(answers.text,answers.textColor);
return fs.writeFile("newLogo.svg",setSVG.render(),function(err){
    if(err){
        console.log(err)
    }
})

        })
}
}
module.exports = CLI;