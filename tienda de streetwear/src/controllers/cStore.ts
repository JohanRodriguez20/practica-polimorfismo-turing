import { iStore } from "../interfaces/iStore.js";
import { MStore } from "../models/mStore.js";
import { MHoodie } from "../models/mHoodie.js";
import { MSneaker } from "../models/mSneaker.js";
import cPrenda from "./cPrenda.js";

export default class cStore {
    private readonly tienda = new MStore();

    constructor(
        private readonly vista: iStore,
        private readonly controladorPrenda: cPrenda,
    ) {
        this.vista.onNuevaPrenda(() => this.procesarPrenda());
    }

    private procesarPrenda(): void {
        this.controladorPrenda.solicitarPrenda((prenda) => {
            if (prenda === null) {
                return;
            }

            let tipoPrenda: string;
            let caracteristicas: string;
            if (prenda instanceof MSneaker) {
                tipoPrenda = "Sneaker";
                caracteristicas = `Alta demanda: ${prenda.altaDemanda ? "Sí" : "No"}`;
            } else if (prenda instanceof MHoodie) {
                tipoPrenda = "Hoodie";
                caracteristicas = `Estampado: ${prenda.estampado ? "Sí" : "No"}; Colección pasada: ${prenda.coleccionPasada ? "Sí" : "No"}`;
            } else {
                throw new Error("Tipo de prenda no reconocido.");
            }

            this.tienda.procesar(prenda);
            this.vista.reportar({
                codigo: prenda.codigo,
                marca: prenda.marca,
                costo: prenda.costo,
                tipoPrenda,
                caracteristicas,
                precioFinal: prenda.precioFinal(),
                gananciaNeta: prenda.gananciaNeta(),
                puntosDrop: prenda.puntosDrop(),
                gananciaTotal: this.tienda.getGananciaTotal(),
                mayorCodigo: this.tienda.getCodigoMayor(),
                totalPuntosDrop: this.tienda.getTotalPuntosDrop(),
            });
        });
    }
}
