//objetos

interface Alumno {
    matricula?:number;
    nombre:string;
    email:string;
}

const alumno:Alumno = {
    nombre:'Erik',
    email:'danielrmzmares@gmail.com',
};

console.log(alumno.nombre);

let mascotas:string[] = ['Perro','Gato','Perico']
mascotas[1] = 'Perico Verde'
mascotas.push('gato dos')
console.table(mascotas)

let temporal:(string|number)[] = []
temporal.push('RCR')
temporal.push(24)
