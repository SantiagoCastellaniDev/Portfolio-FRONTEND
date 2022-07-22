

export class Educacion {
/*
    idEdu?: number*/
    tituloEdu: string;
    fechaEdu: string;
    institucionEdu: string;
    descripcionEdu: string;
    img_LogoEdu: string;

    
    constructor({/*idEdu */tituloEdu, fechaEdu, institucionEdu, descripcionEdu, img_LogoEdu}:{ /*idEx:number, */tituloEdu: string; fechaEdu: string; institucionEdu: string; descripcionEdu: string; img_LogoEdu: string; }) {
       /* this.idEdu = idEdu;*/
        this.tituloEdu = tituloEdu;
        this.fechaEdu = fechaEdu;
        this.institucionEdu = institucionEdu;
        this.descripcionEdu = descripcionEdu;
        this.img_LogoEdu = img_LogoEdu;
    }
}

/*
export interface Educacion {

    idEdu?: number;
    tituloEdu: string;
    fechaEdu: string;
    institucionEdu: string;
    descripcionEdu: string;
    img_LogoEdu: string;
    
    
}*/


