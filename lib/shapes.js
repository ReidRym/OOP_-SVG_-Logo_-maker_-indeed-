class Shape{
    constructor(){
       this.color="" 
    }
    setColor(color){
        this.color=color
    }}
    class Triangle extends Shape{
render(){
    return `<polygon points="150,20 245,180 56,182" style="fill:${this.color}" />`
}
    }
    class Square extends Shape{
        render(){
            return `<rect x="90" y="40" width="120" height="120" style="fill:${this.color}"/>`
        }
            }


class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" style="fill:${this.color}"/>`
    }
        }


module.exports = {Circle, Square, Triangle};