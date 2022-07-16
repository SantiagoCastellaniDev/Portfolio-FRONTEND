export class Persona {

    id?: number;
    nombre: string;
    apellido: string;
    presentacion: string;
    descripcion: string;
    img_perfil: string;
    img_banner: string;

    constructor (id: number, nombre: string, apellido: string, presentacion: string, descripcion: string, img_perfil: string, img_banner: string) {

        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.presentacion = presentacion;
        this.descripcion = descripcion;
        this.img_perfil = img_perfil;
        this.img_banner = img_banner;
    }
}
