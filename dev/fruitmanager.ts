class FruitManager{
    private fruits : DraggableFruit[] = []
    public get fruit() : DraggableFruit[] {
        return this.fruits
    }

    constructor(){
        for(let i = 0; i<10; i++){
            this.addFruit()
        }
    }
    public addFruit(){
            let randomnumber:number = Math.floor(Math.random() * 3)
            switch(randomnumber){
                case 0 :
                    this.fruits.push(new Strawberry())
                    break;
                case 1 :
                    this.fruits.push(new Grape())
                    break;
                case 2 :
                    this.fruits.push(new Cherry())
                    break;
                }  
    }
}