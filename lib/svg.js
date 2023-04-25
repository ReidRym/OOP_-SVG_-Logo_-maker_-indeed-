// const filesystem = require("./node_modules/graceful-fs/graceful-fs");
// const inquirer = require("inquirer");
// const { circle, square, triangle } = require("./lib/shapes");

class SVG {
    constructor(){
        this.text = "";
        this.shapes = "";

    }
    addShape(shape){
        this.shape=shape.render();
    }
    addText(text,color){
        this.text=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
}
/// this works in test `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>
module.exports = SVG;