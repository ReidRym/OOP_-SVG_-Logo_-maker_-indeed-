class Shape{
    constructor(){
       this.color="" 
    }
    setColor(color){
        this.color=color
    }}
    class Triangle extends Shape{
render(){
    return `<polygon points="50,0 0,86 100,86" style="fill:${this.color}" />`
}
    }
    class Square extends Shape{
        render(){
            return `<rect x="100" y="100" width="200" height="200" style="fill:${this.color}"/>`
        }
            }


class Circle extends Shape{
    render(){
        return `<circle cx="25" cy="75" r="20"style="fill:${this.color}"/>`
    }
        }


module.exports = {Circle, Square, Triangle};