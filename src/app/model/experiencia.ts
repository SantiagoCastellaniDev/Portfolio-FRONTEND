export class Experiencia {
/*
    idEx?: number;*/
    puestoEx: string;
    fechaEx: string;
    empresaEx: string;
    descripcionEx: string;
    img_LogoEx: string;

    
    constructor({ /*idEx,*/puestoEx, fechaEx, empresaEx, descripcionEx, img_LogoEx }: { /*idEx:number, */puestoEx: string; fechaEx: string; empresaEx: string; descripcionEx: string; img_LogoEx: string; }) {
        /*this.idEx = idEx;*/
        this.puestoEx = puestoEx;
        this.fechaEx = fechaEx;
        this.empresaEx = empresaEx;
        this.descripcionEx = descripcionEx;
        this.img_LogoEx = img_LogoEx;
    }
}