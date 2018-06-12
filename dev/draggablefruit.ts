class DraggableFruit{
    protected element:HTMLElement
    protected x:number
    protected y :number
    protected type:string
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
    }
}