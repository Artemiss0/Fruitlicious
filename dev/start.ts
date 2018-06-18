class Start{
    private fruitmanager:FruitManager
    private createmanager:CrateManager
    private score:number = 0
    private game:Game
    private countdown:HTMLElement
    private scoreboard:HTMLElement
    private table:HTMLElement
    private fruitscreen:FruitScreen
    constructor(game:Game){
        //adding table
        this.table = document.createElement('table')
        document.body.appendChild(this.table)
        //adding timer
        this.countdown = document.createElement('timer')
        document.body.appendChild(this.countdown)
        this.countdown.style.left = window.innerWidth / 2 + 320 + "px"

        //adding score
        this.scoreboard = document.createElement('score')
        document.body.appendChild(this.scoreboard)

        this.scoreboard.style.left = window.innerWidth / 2 + 320 + "px"
        this.scoreboard.innerHTML = "0"

        this.game = game
        this.fruitscreen = new FruitScreen()
        this.createmanager = new CrateManager()
        this.fruitmanager = new FruitManager()
        this.timer(60)
    }
    public update () {
        for(let i = 0; i<this.fruitmanager.fruit.length; i++){
            let fruit = this.fruitmanager.fruit[i]
            //pineapple check
            let hit = this.checkCollision(fruit.getRectangle(), this.createmanager.crate[0].getRectangle())
            //apple check
            let hit2 = this.checkCollision(fruit.getRectangle(),this.createmanager.crate[1].getRectangle())
            //grape check
            let hit3 = this.checkCollision(fruit.getRectangle(),this.createmanager.crate[2].getRectangle())

            if (hit && fruit.type == "cherry") {
                fruit.RemoveFruit(this.fruitmanager.fruit,fruit) //removing fruit
                this.score += 1 //add score
                this.scoreboard.innerHTML = `${this.score}`
            }
            if (hit2 && fruit.type == "strawberry") {
                fruit.RemoveFruit(this.fruitmanager.fruit,fruit) 
                this.score += 1 
                this.scoreboard.innerHTML = `${this.score}`
            }
            if (hit3 && fruit.type == "grape") {
                fruit.RemoveFruit(this.fruitmanager.fruit,fruit) 
                this.score += 1 
                this.scoreboard.innerHTML = `${this.score}`
            }

        }
        if(this.fruitmanager.fruit.length < 10 ){  
            this.fruitmanager.addFruit()
        }
    }
    //check collision between crate & fruit
    private checkCollision(a:ClientRect, b:ClientRect){
        return(a.left <= b.right &&
        b.left <= a.right &&
        a.top <= b.bottom &&
        b.top <= a.bottom)
    }
    private timer(seconds:number){
        var counter = seconds
        var interval = setInterval(() => {
            this.countdown.innerHTML = `0:${counter}`
            counter--;
            if (counter < 0 ) {
                this.game.stop(this.score)
                clearInterval(interval);
            }	
        }, 1000);
    }
    public deleteElements(){
        this.scoreboard.remove();
        this.table.remove()
        this.countdown.remove()
        this.fruitscreen.remove()
    }
}