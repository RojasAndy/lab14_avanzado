export class Vuelo {

    _id?: string;
    origen: string;
    destino: string;
    fechahora: Date;
    piloto_id: Int16Array;
    avion_id: Int16Array;
    tripulador_id: Int16Array;

    constructor(origen:string, destino:string, fechahora: Date, piloto_id: Int16Array, avion_id: Int16Array, tripulador_id: Int16Array ){
        this.origen = origen;
        this.destino = destino;
        this.fechahora = fechahora;
        this.piloto_id = piloto_id;
        this.avion_id = avion_id;
        this.tripulador_id = tripulador_id;
    }

}