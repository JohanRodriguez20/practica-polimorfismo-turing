import { MPrenda } from "./mPrenda.js";
export class MHoodie extends MPrenda {
    _estampado;
    _coleccionPasada;
    constructor({ codigo, marca, costo, estampado, coleccionPasada, }) {
        super({ codigo, marca, costo });
        this._estampado = Boolean(estampado);
        this._coleccionPasada = Boolean(coleccionPasada);
    }
    set estampado(estampado) {
        this._estampado = estampado;
    }
    get estampado() {
        return this._estampado;
    }
    set coleccionPasada(coleccionPasada) {
        this._coleccionPasada = coleccionPasada;
    }
    get coleccionPasada() {
        return this._coleccionPasada;
    }
    precioFinal() {
        let total = this.precioInicial();
        if (this._estampado) {
            total += 8;
        }
        if (this._coleccionPasada) {
            total -= 6;
        }
        return total;
    }
    puntosDrop() {
        return this.puntosBase() * 2 - (this._coleccionPasada ? 2 : 0);
    }
}
//# sourceMappingURL=mHoodie.js.map