class Game{
    private startscreen:StartScreen
    constructor(){
        this.startscreen =  new StartScreen(this)
        this.gameloop()

    }
    private gameloop(){
        requestAnimationFrame(() => this.gameloop())
    }
    public startGame(){
        new StartGame()
        this.startscreen.removeButton()
    }
}
window.addEventListener("load", () => new Game())