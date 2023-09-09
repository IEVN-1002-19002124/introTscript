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