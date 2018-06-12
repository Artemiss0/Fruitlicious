/// <reference path="gameObject.ts"/>

class Tree extends GameObject{
    constructor(){
        super()
        //creating the Tree
        this.element = document.createElement('tree')
        document.body.appendChild(this.element)

        //positioning tree
        this.x = (window.innerWidth - this.element.offsetWidth) / 2
        this.y = (window.innerHeight - this.element.offsetHeight) / 2 - 80
        this.element.style.transform = `translate(${this.x}px,${this.y}px)`
    }
}