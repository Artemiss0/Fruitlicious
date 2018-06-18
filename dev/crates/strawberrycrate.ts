/// <reference path="../gameObject.ts"/>
class StrawberryCrate extends GameObject{
    constructor(){
        super()

        this.type = 'strawberrycrate'
        this.x = (window.innerWidth - 140) / 2
        this.y = window.innerHeight - 180
        this.createElement()
    }
}