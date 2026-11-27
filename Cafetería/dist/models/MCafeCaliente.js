import { MBebida } from "./MBebida.js";
export class MCafeCaliente extends MBebida {
    constructor(nombre, precioBase, conLecheVegetal) {
        super(nombre, precioBase);
        this._conLecheVegetal = false;
        this.conLecheVegetal = conLecheVegetal;
    }
    set conLecheVegetal(valor) {
        this._conLecheVegetal = Boolean(valor);
    }
    get conLecheVegetal() {
        return this._conLecheVegetal;
    }
    calcularPrecioFinal() {
        let precio = super.calcularPrecioFinal();
        if (this.conLecheVegetal) {
            precio += MCafeCaliente.RECARGO_LECHE_VEGETAL;
        }
        return precio;
    }
    gramosAzucar() {
        const gramosBase = super.gramosAzucar();
        if (this.conLecheVegetal) {
            return gramosBase * MCafeCaliente.FACTOR_AZUCAR_LECHE_VEGETAL;
        }
        return gramosBase;
    }
    obtenerTipo() {
        return "Café Caliente";
    }
}
MCafeCaliente.RECARGO_LECHE_VEGETAL = 0.75;
MCafeCaliente.FACTOR_AZUCAR_LECHE_VEGETAL = 0.5;
