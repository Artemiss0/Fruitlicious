class DraggableFruit{
    protected element:HTMLElement
    protected x:number
    protected y :number
    protected type:string
    protected offSetX:number
    protected offSetY:number
    protected moveBind:EventListener
    constructor(){    
    }
    protected createElement():void{
        const tree = document.getElementsByTagName('tree')[0]
        //create and append fruit to tree
        this.element = document.createElement(this.type)
        tree.appendChild(this.element)

        //random positionering of the fruits 
        this.x = Math.floor(Math.random() * tree.clientWidth)
        this.y = Math.floor(Math.random() * tree.clientHeight)

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
    }
    protected stopDragging(e:MouseEvent):void{
        window.removeEventListener("mousemove", this.moveBind)
        e.preventDefault()
    }
}