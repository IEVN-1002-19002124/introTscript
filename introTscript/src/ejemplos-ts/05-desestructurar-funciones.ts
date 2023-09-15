export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'Sony',
    precio:875
}
const table:Producto={
    desc:'Ipad Air',
    precio:1837
}

/* function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((productos)=>{
        total+=productos.precio;
    })
    return total*0.16;
} */
export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach((productos)=>{
        total+=productos.precio;
    })
    return [total,total*0.16];
}
/* const articulos1=[telefono,table];
const iva1=calcularIVA(articulos1);
console.log(`IVA ${iva1}`); */

const articulos2=[telefono,table];
const [total,iva2]=calcularIVA2(articulos2);
console.log(`Total $${total}`);
console.log(`IVA $${iva2}`);