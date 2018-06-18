class GameObject{
    public element:HTMLElement
    protected x:number
    protected y :number
    protected canvas = document.getElementsByTagName('canvas')[0]
    public type:string // todo via get method
    constructor(){
        
    }
    protected createElement(){
        this.element = document.createElement(this.type)
        document.body.appendChild(this.element)

        this.element.style.transform = `translate(${this.x}px,${this.y}px)`
    }
    public getRectangle(){
        return this.element.getBoundingClientRect()
    }
}