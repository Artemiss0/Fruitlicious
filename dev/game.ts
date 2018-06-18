class Game{
    private startscreen:StartScreen
    private startGame : Start
    private gameOver: Stop
    private score:number
    constructor(){
        this.startscreen =  new StartScreen(this)
        this.gameloop()

    }
    private gameloop(){
        if(this.startGame) {
            this.startGame.update()
        }
        requestAnimationFrame(() => this.gameloop())
    }
    public start(){
        this.startGame = new Start(this)
        this.startscreen.removeButton()
        this.gameOver.remove()
    }
    public stop(score:number){
        this.gameOver = new Stop(this,score)
        this.startGame.deleteElements()
    }
}
window.addEventListener("load", () => new Game())