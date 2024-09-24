const buzos=[
    {
        marca: "VANS",
        color: "NEGRO",
        talle: "XL",
        images: "images/VANS1.webp",
    },   
    {
        marca: "VANS",
        color: "GRIS",
        talle: "XL",
        images: "images/VANS2.webp",
    },
    {
        marca: "VANS",
        color: "NEGRO",
        talle: "XL",
        images: "images/VANS3.webp",
    },
    {
        marca: "UNDEFINED",
        color: "NEGRO",
        talle: "XS",
        images: "images/unde2.png",
    },
    {
        marca: "UNDEFINED",
        color: "NEGRO",
        talle: "XS",
        images: "images/UNDEFINED2.jpg",
    },
    {
        marca: "UNDEFINED",
        color: "NEGRO",
        talle: "XS",
        images: "images/UNDEFINED3.jpg",
    },
    {
        marca: "NIKE",
        color: "BLANCO",
        talle: "L",
        images: "images/nike1.webp",
    },
    {
        marca: "NIKE",
        color: "BEIGE",
        talle: "L",
        images: "images/nike2.jpg",
    },
    {
        marca: "NIKE",
        color: "VERDE",
        talle: "L",
        images: "images/nike3.jpg",
    },
    {
        marca: "ADIDAS",
        color: "BLANCO",
        talle: "L",
        images: "images/ADIDAS1.jpg",
    },
    {
        marca: "ADIDAS",
        color: "NEGRO",
        talle: "L",
        images: "images/ADIDAS2.webp",
    },
    {
        marca: "ADIDAS",
        color: "VERDE",
        talle: "L",
        images: "images/ADIDAS3.jpg",
    },
    {
        marca: "ZARA",
        color: "MARRÓN",
        talle: "L",
        images: "images/ZARA1.jpg",
    },
    {
        marca: "ZARA",
        color: "BEIGE",
        talle: "L",
        images: "images/ZARA2.jpg",
    },
    {
        marca: "ZARA",
        color: "BLANCO",
        talle: "L",
        images: "images/ZARA3.jpg",
    },
    {
        marca: "GUCCI",
        color: "DORADO",
        talle: "L",
        images: "images/GUCCI1.jpg",
    },
    {
        marca: "GUCCI",
        color: "AZUL",
        talle: "L",
        images: "images/GUCCI2.webp",
    },
    {
        marca: "GUCCI",
        color: "NEGRO",
        talle: "L",
        images: "images/GUCCI3.webp",
    },
    {
        marca: "AMERICAN EAGLE",
        color: "AZUL",
        talle: "L",
        images: "images/AE1.webp",
    },
    {
        marca: "AMERICAN EAGLE",
        color: "VERDE",
        talle: "L",
        images: "images/AE2.webp",
    },
    {
        marca: "AMERICAN EAGLE",
        color: "GRIS",
        talle: "L",
        images: "images/AE3.webp",
    },
    {
        marca: "ABERCROMBIE",
        color: "AZUL",
        talle: "L",
        images: "images/ABER1.webp",
    },
    {
        marca: "ABERCROMBIE",
        color: "ALBIAZUL",
        talle: "NIÑO",
        images: "images/ABER2.jpg",
    },
    {
        marca: "ABERCROMBIE",
        color: "BLANCO",
        talle: "L",
        images: "images/ABER3.avif",
    },
    {
        marca: "BILLABONG",
        color: "NEGRO",
        talle: "L",
        images: "images/billa1.jpg",
    },
    {
        marca: "BILLABONG",
        color: "BLANCO",
        talle: "L",
        images: "images/billa2.jpg",
    },
    {
        marca: "BILLABONG",
        color: "MARRÓN",
        talle: "L",
        images: "images/billa3.jpg",
    },
    {
        marca: "COLUMBIA",
        color: "AZUL",
        talle: "L",
        images: "images/columbia1.jpg",
    },
    {
        marca: "COLUMBIA",
        color: "AZUL",
        talle: "L",
        images: "images/columbia2.webp",
    },
    {
        marca: "COLUMBIA",
        color: "AZUL",
        talle: "L",
        images: "images/columbia3.jpg",
    },
    {
        marca: "RIPCURL",
        color: "GRIS",
        talle: "L",
        images: "images/RIP1.jpg",
    },
    {
        marca: "RIPCURL",
        color: "GRIS",
        talle: "L",
        images: "images/rip2.jpg",
    },
    {
        marca: "RIPCURL",
        color: "CELESTE",
        talle: "L",
        images: "images/rip3.webp",
    },
    {
        marca: "LEVIS",
        color: "VIOLETA",
        talle: "L",
        images: "images/LEVIS1.jpg",
    },
    {
        marca: "LEVIS",
        color: "NEGRO",
        talle: "L",
        images: "images/levis2.webp",
    },
    {
        marca: "LEVIS",
        color: "CREMA",
        talle: "L",
        images: "images/levis3.webp",
    },
    {
        marca: "LACOSTE",
        color: "NEGRO",
        talle: "L",
        images: "images/LACOSTÉ1.jpg",
    },
    {
        marca: "LACOSTE",
        color: "BLANCO",
        talle: "L",
        images: "images/LACOSTÉ2.jpg",
    },
    {
        marca: "LACOSTE",
        color: "VERDE",
        talle: "L",
        images: "images/LACOSTÉ3.jpg",
    },


]

function mostrarbuzos(misBuzos=buzos){
    const section= document.querySelector(".listado-buzos");
    let elementos="";
    misBuzos.forEach((buzo)=>{
    elementos+=`<div><img src="${buzo.images}"><p>${buzo.marca}</p></div>`
});
section.innerHTML=elementos;
}
function APLICARFILTRO(marca){
    const filtrarbuzos=buzos.filter((buzo)=>{
        const buzosFiltrados = buzo.marca==marca;
        return buzosFiltrados
    })
    mostrarbuzos(filtrarbuzos);
}
