class CrateManager{
    private crates: GameObject[] = []
    public get crate(){
        return this.crates
    }
    constructor(){
        //adding the diffrent crates
        this.crates.push(new CherryCrate(),new StrawberryCrate(),new GrapeCrate())
    }
}