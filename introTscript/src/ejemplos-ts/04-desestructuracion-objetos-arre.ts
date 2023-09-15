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
console.log(`El cantante es: ${autor}`);

const colores:string[]=['blue','red','green','violet'];
console.log(`Color 1: ${colores[0]}`);
console.log(`Color 2: ${colores[1]}`);
console.log(`Color 3: ${colores[2]}`);

const[a,,,b]=colores;
console.log(`Color 2: ${a}`);