const buzos=[
    {
        marca: "VANS",
        color: "NEGRO",
        talle: "XL",
        images: "images/VANS1.webp",
    },   
    {
        marca: "UNDEFINED",
        color: "NEGRO",
        talle: "XS",
        images: "images/unde2.png",
    },
    {
        marca: "NIKE",
        color: "BLANCO",
        talle: "L",
        images: "images/nike1.webp",
    },
    {
        marca: "ADIDAS",
        color: "NEGRO",
        talle: "L",
        images: "images/ADIDAS1.jpg",
    },
    {
        marca: "ZARA",
        color: "MARRÓN",
        talle: "L",
        images: "images/ZARA1.jpg",
    },
    {
        marca: "GUCCI",
        color: "DORADO",
        talle: "L",
        images: "images/GUCCI1.jpg",
    },
    {
        marca: "AMERICAN EAGLE",
        color: "AZUL",
        talle: "L",
        images: "images/AE1.WEBP",
    },
    {
        marca: "ABERCROMBIE",
        color: "AZUL",
        talle: "L",
        images: "images/ABER1.webp",
    },
    {
        marca: "BILLABONG",
        color: "NEGRO",
        talle: "L",
        images: "images/billa1.jpg",
    },
    {
        marca: "COLUMBIA",
        color: "AZUL",
        talle: "L",
        images: "images/columbia1.jpg",
    },
    {
        marca: "RIPCURL",
        color: "GRIS",
        talle: "L",
        images: "images/RIP1.jpg",
    },
    {
        marca: "LEVIS",
        color: "VIOLETA",
        talle: "L",
        images: "images/LEVIS1.jpg",
    },
    {
        marca: "LACOSTE",
        color: "NEGRO",
        talle: "L",
        images: "images/LACOSTÉ1.jpg",
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
