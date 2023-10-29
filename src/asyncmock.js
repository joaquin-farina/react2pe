const misProductos = [
    { id: "1", nombre: "Superman El Nuevo Mundo", precio: 4000, img: "../public/img/superman.webp", idCat: "2",},
    { id: "2", nombre: "Batman la broma asesina", precio: 4500, img: "../public/img/comicbatman.webp", idCat: "2",},
    { id: "3", nombre: "Civil War parte 1", precio: 3900, img: "../public/img/civilwar.webp", idCat: "2",},
    { id: "4", nombre: "Deadpool Clasico Vol. 3", precio: 4200, img: "../public/img/deadpool.webp", idCat: "2",},
    { id: "5", nombre: "Marvel Legacy Daredevil", precio: 3500, img: "../public/img/dd.webp", idCat: "2",},
    { id: "6", nombre: "Spiderman", precio: 3700, img: "../public/img/spiderman.webp", idCat: "2",},
    { id: "7", nombre: "DC Flash", precio: 4300, img: "../public/img/flash.webp", idCat: "2",},
    { id: "8", nombre: "Justice League Vol. 2", precio: 4500, img: "../public/img/jl.webp", idCat: "2",},
    { id: "9", nombre: "Attack on Titan Vol. 1", precio: 3400, img: "../public/img/aotmanga.webp", idCat: "3",},
    { id: "10", nombre: "Naruto Vol. 1", precio: 3100, img: "../public/img/narutomanga.webp", idCat: "3",},
    { id: "11", nombre: "DB Vol. 1", precio: 4700, img: "../public/img/db.webp", idCat: "3",},
    { id: "12", nombre: "One Piece Vol. 25", precio: 3500, img: "../public/img/onepiece.webp", idCat: "3",},
    { id: "13", nombre: "Jujutsu Kaisen Vol. 3", precio: 5000, img: "../public/img/jujutsu.webp", idCat: "3",},
    { id: "14", nombre: "DB Super Vol. 15", precio: 4800, img: "../public/img/dbsuper.webp", idCat: "3",},
    { id: "15", nombre: "Saint Seiya Vol. 5", precio: 3600, img: "../public/img/saint-seiya.webp", idCat: "3",},
    { id: "16", nombre: "Demon Slayer Vol. 12", precio: 4600, img: "../public/img/kimetsu.webp", idCat: "3",},]
,etProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}




export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria);
        }, 500)
    })
}
