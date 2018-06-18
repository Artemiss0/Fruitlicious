/// <reference path="gameObject.ts"/>
class Stop extends GameObject{
    private game:Game
    private button:HTMLElement
    private background:HTMLElement
    private gameover:HTMLElement
    private scoreboard:HTMLElement
    constructor(game:Game,score:number){
        super()
        this.game = game

        this.background = document.createElement('gradientBK')
        document.body.appendChild(this.background)

        //game over text
        this.gameover = document.createElement('gameover')
        document.body.appendChild(this.gameover)
        this.gameover.innerHTML = 'Game Over'

        //score
        this.scoreboard = document.createElement('endscore')
        document.body.appendChild(this.scoreboard)
        this.scoreboard.innerHTML = `score: ${score}`

        //replay button
        this.button = document.createElement('replaybtn')
        document.body.appendChild(this.button)
        this.y = (window.innerHeight - this.button.offsetWidth) / 2 + 70

        this.button.style.transform = `translate(50px,${this.y}px)`

        this.button.addEventListener("click",()=> this.replay())
    }
    replay(){
        this.game.start()
    }
    remove(){
        this.scoreboard.remove()
        this.background.remove()
        this.gameover.remove()
        this.button.remove()
    }
}