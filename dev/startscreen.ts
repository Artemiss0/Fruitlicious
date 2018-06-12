/// <reference path="gameObject.ts" />
class StartScreen extends GameObject{
    private game:Game
    constructor(game:Game){
        super()
        this.game = game

        //creating startbutton
        this.element = document.createElement('button')
        document.body.appendChild(this.element)

        //adding style and position to button
        this.element.innerHTML = 'start'
        this.x = (window.innerWidth - this.element.offsetWidth) / 2
        this.y = (window.innerHeight - this.element.offsetHeight) / 2
        this.element.style.transform = `translate(${this.x}px,${this.y}px)` 

        //adding eventlistener on button
        //Starting the game instance 
        this.element.addEventListener("click", () => this.game.startGame())
    }
    public removeButton(){
        //removing button after click
        this.element.remove()
    }
}