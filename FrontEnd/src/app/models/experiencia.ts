export class Experiencia{
    idExp: number;
    tituloExp: string;
    fechaExp: number;
    descripcionExp: string;
    imagenExp: string;

    constructor(
        idExp: number,
        tituloExp: string,
        fechaExp: number,
        descripcionExp: string,
        imagenExp: string){
            this.idExp=idExp;
            this.tituloExp=tituloExp;
            this.fechaExp=fechaExp;
            this.descripcionExp=descripcionExp;
            this.imagenExp=imagenExp;
        }
}
