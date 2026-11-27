import { MHoodie } from "../models/mHoodie.js";
import { MSneaker } from "../models/mSneaker.js";
export default class cPrenda {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.cancelar());
        this.vista.onAceptar(() => this.aceptar());
    }
    solicitarPrenda(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    cancelar() {
        this.callback(null);
        this.vista.ocultar();
    }
    aceptar() {
        const datos = {
            codigo: this.vista.codigo,
            marca: this.vista.marca,
            costo: this.vista.costo,
        };
        const prenda = this.vista.tipoPrenda === "sneaker"
            ? new MSneaker({ ...datos, altaDemanda: this.vista.altaDemanda })
            : new MHoodie({
                ...datos,
                estampado: this.vista.estampado,
                coleccionPasada: this.vista.coleccionPasada,
            });
        this.callback(prenda);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cPrenda.js.map