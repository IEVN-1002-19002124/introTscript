function suma():void{
    console.log(`La suma es ${3+5}`);
}

suma()

function suma2(a:number,b:number):number{
    return a+b;
}
const resutado = suma2(8,22);
//console.log(resutado);
console.log(`La suma es ${resutado}`);

function multiplicar(n1:number,n2:number,base:number=7):number{
    let tem = n1*base;

    return tem;
}
console.log(multiplicar(3,4,5));

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}
function calcular(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre:'Miau',
    edad:2,
    mostrarEdad() {
        console.log('La edad es: ',this.edad);
    },
}
calcular(nuevaMascota,3);