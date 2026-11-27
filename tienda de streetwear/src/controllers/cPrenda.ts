import { iPrenda } from "../interfaces/iPrenda.js";
import { MPrenda } from "../models/mPrenda.js";
import { MHoodie } from "../models/mHoodie.js";
import { MSneaker } from "../models/mSneaker.js";

export default class cPrenda {
    private callback!: (prenda: MPrenda | null) => void;

    constructor(private readonly vista: iPrenda) {
        this.vista.onCancelar(() => this.cancelar());
        this.vista.onAceptar(() => this.aceptar());
    }

    solicitarPrenda(callback: (prenda: MPrenda | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private cancelar(): void {
        this.callback(null);
        this.vista.ocultar();
    }

    private aceptar(): void {
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
