import { MStore } from "../models/mStore.js";
import { MHoodie } from "../models/mHoodie.js";
import { MSneaker } from "../models/mSneaker.js";
export default class cStore {
    vista;
    controladorPrenda;
    tienda = new MStore();
    constructor(vista, controladorPrenda) {
        this.vista = vista;
        this.controladorPrenda = controladorPrenda;
        this.vista.onNuevaPrenda(() => this.procesarPrenda());
    }
    procesarPrenda() {
        this.controladorPrenda.solicitarPrenda((prenda) => {
            if (prenda === null) {
                return;
            }
            let tipoPrenda;
            let caracteristicas;
            if (prenda instanceof MSneaker) {
                tipoPrenda = "Sneaker";
                caracteristicas = `Alta demanda: ${prenda.altaDemanda ? "Sí" : "No"}`;
            }
            else if (prenda instanceof MHoodie) {
                tipoPrenda = "Hoodie";
                caracteristicas = `Estampado: ${prenda.estampado ? "Sí" : "No"}; Colección pasada: ${prenda.coleccionPasada ? "Sí" : "No"}`;
            }
            else {
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
//# sourceMappingURL=cStore.js.map