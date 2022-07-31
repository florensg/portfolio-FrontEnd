export class Educacion{
    idEdu: number;
    tituloEdu: string;
    fechaEdu: number;
    descripcionEdu: string;
    imagenEdu: string;

    constructor(idEdu: number,
        tituloEdu: string,
        fechaEdu: number,
        descripcionEdu: string,
        imagenEdu: string){
            this.idEdu=idEdu;
            this.tituloEdu=tituloEdu;
            this.fechaEdu=fechaEdu;
            this.descripcionEdu=descripcionEdu;
            this.imagenEdu=imagenEdu;
        }
}
