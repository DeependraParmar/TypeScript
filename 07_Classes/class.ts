// we have three access specifiers in ts same as that of c/cpp
// public, private and protected and public is given by default.

class Player{
    // by default, all the properties are public in access 
    
    constructor(private height: number, public weight: number, protected power: number){}

    get getMyHeight():number{
        return this.height; 
    }
    set changeMyHeight(value: number) {
        this.height = value;
    }
}

class ProPlayer extends Player{
    special: boolean;

    constructor(height: number, weight: number,power: number, special: boolean){
        super(height, weight, power);
        this.special = special;
    }

    getMyPower = () => this.power;
}

const deependra = new Player(150,58,200);
const proDeependra = new ProPlayer(150,58,200,false);
// deependra.height; // height is private in class Player so, can't access it here.

console.log("Deependra's height before setting: " ,deependra.getMyHeight);
deependra.changeMyHeight = 155;
console.log("Deependra's height after setting: ", deependra.getMyHeight);

console.log();
console.log("Pro Deependra's Power: " , proDeependra.getMyPower());
