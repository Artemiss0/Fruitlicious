/// <reference path="gameObject.ts" />


class DraggableFruit extends GameObject{
    protected offSetX:number
    protected offSetY:number
    protected moveBind:EventListener
    constructor(){ 
        super()  
    }

    protected createElement():void{
        const tree = document.getElementsByTagName('fruitscreen')[0]
        //create and append fruit to tree
        this.element = document.createElement(this.type)
        tree.appendChild(this.element)

        //random positionering of the fruits 
        this.x = Math.floor(Math.random() * tree.clientWidth - this.element.offsetWidth)
        this.y = Math.floor(Math.random() * tree.clientHeight - this.element.offsetHeight)

        this.element.style.transform = `translate(${this.x}px,${this.y}px)`

        //drag & drop
        //adding mouseup & mousedown events 
        this.moveBind = (e:Event) => this.updatePosition(e as MouseEvent)
        this.element.addEventListener("mousedown", (e) => this.startDragging(e))
        this.element.addEventListener("mouseup", (e) => this.stopDragging(e))
    }
    protected startDragging(e:MouseEvent):void{
        e.preventDefault()
        this.offSetX = e.clientX - this.x
        this.offSetY = e.clientY - this.y  
    
        window.addEventListener("mousemove", this.moveBind)
    }
    protected updatePosition(e:MouseEvent):void{
        e.preventDefault()
        this.x = e.clientX - this.offSetX
        this.y = e.clientY - this.offSetY

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)` 
        this.getRectangle()
    }
    public getRectangle(){
        return this.element.getBoundingClientRect()
    }
    public RemoveFruit(array:any, element:any){
        let i = array.indexOf(element)
        array.splice(i,1)
        
        return this.element.remove()
    }
    protected stopDragging(e:MouseEvent):void{
        window.removeEventListener("mousemove", this.moveBind)
        e.preventDefault()
    }
}