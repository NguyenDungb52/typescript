 


class Fan{
private SLOW :number 
private MEDIUM  : number
private FAST : number 
private  speed : number
private on : boolean 
private radius : number
private color : string 

constructor(speed:number,radius:number,color:string,on:boolean ) {
          this.on = on
          this.speed = speed
          this.radius = radius
          this.color = color
          
    }

    speedFan(){
       if(this.speed == 1){
        this.SLOW = this.speed
        return this.SLOW
       }
       if(this.speed == 2){
        this.MEDIUM = this.speed
        return this.MEDIUM
       }
       if(this.speed == 3){
        this.FAST = this.speed
        return this.FAST
       }
    }

    toString() {
        if(this.on ==false){
            return `${this.color} ${this.radius} fan is off`
        }else{
            return `${this.speedFan()} ${this.color} ${this.radius}`
        }
    }
    
}
let Fan1 = new Fan(3,10,'yellow',true)
console.log(Fan1.toString());
let Fan2= new Fan(2,5,'blue',false)
console.log(Fan2.toString());



