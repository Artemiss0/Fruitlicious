class GameObject{
    protected element:HTMLElement
    protected x:number
    protected y :number
    protected type:string
    constructor(){
        
    }
    protected createElement(){
        this.element = document.createElement(this.type)
        document.body.appendChild(this.element)
    }
}