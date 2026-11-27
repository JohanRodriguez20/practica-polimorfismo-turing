export class MBebida {
    constructor(nombre, precioBase) {
        this._nombre = "";
        this._precioBase = 0;
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
    set nombre(valor) {
        this._nombre = valor.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set precioBase(valor) {
        this._precioBase = +valor;
    }
    get precioBase() {
        return this._precioBase;
    }
    calcularPrecioFinal() {
        return this.precioBase;
    }
    gramosAzucar() {
        return MBebida.GRAMOS_AZUCAR_BASE;
    }
    obtenerTipo() {
        return "Bebida";
    }
}
MBebida.GRAMOS_AZUCAR_BASE = 10;
