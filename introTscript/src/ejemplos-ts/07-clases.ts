class Persona{
    nombre:string;
    edad:number;

    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }
     imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
     }
}

let persona:Persona;
persona = new Persona('Mario',24);
persona.imprimir();

class Dado{
    private valor:number=0;

    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}
let dado1 = new Dado()
dado1.tirar();
dado1.imprimir();

class Persona2{
    constructor(public nombre:string,public edad:number){}
    imprimir(){
        console.log(`Nombre ${this.nombre}, Edad: ${this.edad}`);
        
    }
}