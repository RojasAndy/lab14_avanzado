export class Avion {

    _id?: string;
    tipo: string;
    baseregreso: string;

    constructor(tipo:string, baseregreso:string){
        this.tipo = tipo;
        this.baseregreso = baseregreso;
    }

}