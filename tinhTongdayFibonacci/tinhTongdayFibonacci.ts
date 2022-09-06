
class fibonacci {
    private num: number
    constructor(number:number){
        this.num = number
    }

    sumFibonacci(){
        let n1:number = 0, n2:number = 1, nextTerm:any;
        let tong: number = 0
        let arrSum:any = []
            for (let i:number = 0; i < this.num; i++) {
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
                arrSum.push(n1)
            }
            console.log( arrSum)

          for(let j =0;j<arrSum.length;j++){
            tong += arrSum[j]
          }

          return tong
    }
}

let tong = new fibonacci(5)
console.log(tong.sumFibonacci())