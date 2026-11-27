export class MPrenda {
    _codigo;
    _marca;
    _costo;
    constructor({ codigo, marca, costo }) {
        this._codigo = codigo.trim();
        this._marca = marca.trim();
        this._costo = +costo;
    }
    precioInicial() {
        return this._costo * 1.3;
    }
    puntosBase() {
        return Math.floor(this._costo / 10);
    }
    set codigo(codigo) {
        this._codigo = codigo.trim();
    }
    get codigo() {
        return this._codigo;
    }
    set marca(marca) {
        this._marca = marca.trim();
    }
    get marca() {
        return this._marca;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    gananciaNeta() {
        return this.precioFinal() - this._costo;
    }
}
//# sourceMappingURL=mPrenda.js.map