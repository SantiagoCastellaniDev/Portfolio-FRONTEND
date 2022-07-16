export class Experiencia {

    idEx?: number;
    puestoEx: string;
    fechaEx: string;
    institucionEx: string;
    descripcionEx: string;
    img_LogoEx: string;

    
    constructor(idEx:number, puestoEx:string, fechaEx:string, institucionEx: string, descripcionEx: string, img_LogoEx:string) {
        this.idEx = idEx;
        this.puestoEx = puestoEx;
        this.fechaEx = fechaEx;
        this.institucionEx = institucionEx;
        this.descripcionEx = descripcionEx;
        this.img_LogoEx = img_LogoEx;
    }
}