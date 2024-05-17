export class Penguin {
    id: number;
    nombre: string;
    nombreCientifico: string;
    alimentacion: string;
    distribucionMundial: string;
    detalle: string;
    link: string;

    constructor(id: number,nombre: string, nombreCientifico: string, alimentacion: string, distribucionMundial: string, detalle: string,
        link: string) {
        this.id=id;
        this.nombre=nombre;
        this.nombreCientifico=nombreCientifico;
        this.alimentacion=alimentacion;
        this.distribucionMundial=distribucionMundial;
        this.detalle=detalle;
        this.link=link;

    }
}
