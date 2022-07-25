export class Skill {

    /*idSkill?:number;   */ 
    nombreSkill: string;    
    nivelSkill: string;
    porcentajeSkill: number;
    colorSkill: string;
    img_Skill: string;

    constructor({ /*idSkill, */nombreSkill, nivelSkill, porcentajeSkill, colorSkill, img_Skill }: { /*idSkill: number;*/ nombreSkill: string; nivelSkill: string; porcentajeSkill: number; colorSkill: string; img_Skill: string; }) {

       /*this.idSkill = idSkill;*/
        this.nombreSkill = nombreSkill;
        this.nivelSkill = nivelSkill;
        this.porcentajeSkill = porcentajeSkill;
        this.colorSkill = colorSkill;
        this.img_Skill = img_Skill;
    }


}
