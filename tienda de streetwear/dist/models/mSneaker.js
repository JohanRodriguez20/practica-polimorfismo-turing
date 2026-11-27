import { MPrenda } from "./mPrenda.js";
export class MSneaker extends MPrenda {
    _altaDemanda;
    constructor({ codigo, marca, costo, altaDemanda }) {
        super({ codigo, marca, costo });
        this._altaDemanda = Boolean(altaDemanda);
    }
    set altaDemanda(altaDemanda) {
        this._altaDemanda = Boolean(altaDemanda);
    }
    get altaDemanda() {
        return this._altaDemanda;
    }
    precioFinal() {
        let total = this.precioInicial() + 15;
        if (this.altaDemanda) {
            total *= 1.1;
        }
        return total;
    }
    puntosDrop() {
        return this.puntosBase() * 3 + (this.altaDemanda ? 10 : 0);
    }
}
//# sourceMappingURL=mSneaker.js.map