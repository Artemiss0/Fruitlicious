/// <reference path="../gameObject.ts"/>
class CherryCrate extends GameObject{
    constructor(){
        super()

        this.type = 'cherrycrate'
        this.x = (window.innerWidth - 140) / 2 +220
        this.y = window.innerHeight - 180
        this.createElement()
    }
}