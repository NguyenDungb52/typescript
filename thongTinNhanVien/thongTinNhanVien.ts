class Employee{
    private hoTen :string
    private gioiTinh :string
    private email : string
    private SDT : string
    private arrNV : any
    constructor(arr: any){
        this.arrNV = arr
    }

    createNV(hoTen :string,gioiTinh :string,email : string,SDT : string){
        let arr = {
            hoTen: hoTen,
            gioiTinh: gioiTinh,
            email: email,
            SDT: SDT
        }
        this.arrNV.push(arr)
    }

    remoteNV(hoTen:string){
        for(let i=0;i<this.arrNV.length;i++){
           if(this.arrNV[i].hoTen == hoTen){
            this.arrNV.splice(i,1)
           }
         }
       
     
    }

    getNV(){
        for(let i=0;i<this.arrNV.length;i++){
           console.log(this.arrNV[i].hoTen,this.arrNV[i].gioiTinh,this.arrNV[i].email,this.arrNV[i].SDT)
        }
    }
}

let arrNv = [
    {
        hoTen: "Hieu",
        gioiTinh: "Nam",
        email: "thienhotdog@gmail.com",
        SDT: "0123456"
    },
    {
        hoTen: "Dung",
        gioiTinh: "Nam",
        email: "Dungb52@gmail.com",
        SDT: "0986433"
    }
]
let arrNV = new Employee(arrNv)
arrNV.getNV()
// arrNV.remoteNV("Dung")
// arrNV.getNV()
arrNV.createNV( "dat","Nu","Dungb52@gmail.com","0986433")
arrNV.getNV()

