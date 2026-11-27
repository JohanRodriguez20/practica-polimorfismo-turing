export interface iStore {
    onNuevaPrenda(callback: () => void): void;
    reportar(datos: {
        codigo: string;
        marca: string;
        costo: number;
        tipoPrenda: string;
        caracteristicas: string;
        precioFinal: number;
        gananciaNeta: number;
        puntosDrop: number;
        gananciaTotal: number;
        mayorCodigo: string;
        totalPuntosDrop: number;
    }):void;
}