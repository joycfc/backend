// **CREAMOS LA CLASE

class Usuario {
    //**            metodo para definir la estructura
    constructor(id, nombre, apellido, libros, mascotas) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    //** RETORNA EL NOMBRE COMPLETO DEL USUARIO
    getFullName() {
        return this.nombre + " " + this.apellido;
    }

    //** AGREGA UNA NUEVA MASCOTA
    addMascotas(mascota) {
        return this.mascotas.push(mascota);
    }

    //** RETORNA CUANTAS MASCOTAS HAY
    countMascotas() {
        return this.mascotas.length;
    }

    //** AGREGA UN OBJETO DE TIPO STRING AL ARRAY DE LIBROS
    agregarLibro(autor, titulo) {
        this.libros.push({
            autor: autor,
            titulo: titulo,
        });
    }

    //** RETORNA LOS NOMBRES DE LOS LIBROS
    getBookNames() {
        return this.libros.map(({ titulo }) => titulo);
    }
}

//** creamos un nuevo usuario
const nuevoUsuario = new Usuario(
    01,
    "carlos",
    "franco",
    [{ autor: "stephen king", titulo: "it" }],
    ["perros", "gatos"]
);

//** AGREGA UNA NUEVA MASCOTA
nuevoUsuario.addMascotas("tortugas");
nuevoUsuario.addMascotas("caballos");

//** AGREGA UN NUEVO LIBRO Y SU AUTOR
nuevoUsuario.agregarLibro("Franz Kafka", "La metamorfosis");

//** RETORNA EL NOMBRE COMPLETO DEL USUARIO
console.log(nuevoUsuario.getFullName());

//** CUENTA CUANTAS MASCOTAS HAY
console.log(nuevoUsuario.countMascotas());

//** RETORNA LOS NOMBRES DE LOS LIBROS
console.log(nuevoUsuario.getBookNames());

//** MUESTRA AL USUARIO FINAL
console.log(nuevoUsuario);
