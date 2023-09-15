class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }
    imprimir(){console.log(`Nombre ${this.nombre}, Edad: ${this.edad}`);}
}

class Empleado extends Persona3{
    private sueldo:number;
    constructor(a:string,b:number,s:number){
        super(a,b);
        this.sueldo=s;
    }
    imprimir(){
        console.log(`Sueldo: ${this.sueldo}`);
    }
    pagarImpuestos(){
        if(this.sueldo>5000)
        console.log(`${this.nombre} debe pagar las caguas: Sueldo: $${this.sueldo}`)
        else
        console.log(`${this.nombre} no tiene para donde caerse muerto: Sueldo $${this.sueldo}`);
    }
}

const persona3 = new Persona3('Juan', 45);
persona.imprimir();
const empleado1 = new Empleado('Ana',22,7000);
empleado1.imprimir();
empleado1.pagarImpuestos();
