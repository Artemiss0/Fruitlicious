/// <reference path="../gameObject.ts"/>
class PineappleCrate extends GameObject{
    constructor(){
        super()

        this.type = 'applecrate'
        this.x = (window.innerWidth - 140) / 2 + 200
        this.y = (window.innerHeight + 450) /2
        this.createElement()
    }
}