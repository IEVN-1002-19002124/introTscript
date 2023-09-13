//Desmenuzar un pollo

interface Retroductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Retroductor={
    volumen: 90,
    segundo: 66,
    cancion: "Mañanitas",
    detalles: {
        autor:"Cepillin",
        year:1978
    }
}

//let mascotas:string[]=[]; <- Ta' mal

/* console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`); */
console.log(`La canción es: ${reproductor.cancion}`);
console.log(`El autor es: ${reproductor.detalles.autor}`);

const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);