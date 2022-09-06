class arrShort {
    private numbers: any
        constructor(numbers:any) {
            this.numbers = numbers
        }
 shortNumbers(){
    var arr:any = []
    for(let i:number = 0;i<=10 ;i++ ){
        if(this.numbers.indexOf(i) == -1){
           arr.push(i)
        }
    }
    return arr
 }
}
 
var number = new arrShort([0, 2, 3, 5, 7, 8, 9, 10])
console.log(number.shortNumbers())