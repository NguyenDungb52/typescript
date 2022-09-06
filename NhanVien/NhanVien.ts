class Staff {
    private name : string
    private email : string
    private age : number

    constructor(name :string,email:string,age:number){
        this.name =name
        this.email = email
        this.age = age
    }
    getName(){
        return this.name 
    }
    getEmail(){
        return this.email 
    }
    getAge(){
        return this.age
    }
}
let Hieu = new Staff('Hieu', 'thienhotdog@gmail.com',22)
console.log(Hieu.getName(),Hieu.getEmail(),Hieu.getAge())