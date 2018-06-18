/// <reference path="../gameObject.ts"/>
class GrapeCrate extends GameObject{
    constructor(){
        super()

        this.type = 'grapecrate'
        this.x = (window.innerWidth - 140) / 2 - 220
        this.y = window.innerHeight - 180
        this.createElement()
    }
}