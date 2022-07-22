export class Proyecto {

   /* idProject?: number;*/
    nombreProject: string;
    fechaProject: string;
    puestoProject: string;
    descripcionProject: string;
    img_Project: string;

    
    constructor({nombreProject,fechaProject,puestoProject,descripcionProject,img_Project}:{/*idProject:number,*/ nombreProject:string, fechaProject:string, puestoProject: string, descripcionProject: string, img_Project:string}) {
        /*this.idProject = idProject;*/
        this.nombreProject = nombreProject;
        this.fechaProject = fechaProject;
        this.puestoProject = puestoProject;
        this.descripcionProject = descripcionProject;
        this.img_Project = img_Project;
    }
}