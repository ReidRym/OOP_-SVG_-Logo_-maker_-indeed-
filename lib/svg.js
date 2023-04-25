const filesystem = require("./node_modules/graceful-fs/graceful-fs");
const inquirer = require("inquirer");
const { circle, square, triangle } = require("./lib/shapes");

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
        return `<svg height="200" width="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
}

module.exports = SVG;