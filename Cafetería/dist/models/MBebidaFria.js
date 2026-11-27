import { MBebida } from "./MBebida.js";
export class MBebidaFria extends MBebida {
    constructor(nombre, precioBase, esGrande) {
        super(nombre, precioBase);
        this._esGrande = false;
        this.esGrande = esGrande;
    }
    set esGrande(valor) {
        this._esGrande = Boolean(valor);
    }
    get esGrande() {
        return this._esGrande;
    }
    calcularPrecioFinal() {
        let precio = super.calcularPrecioFinal();
        if (this.esGrande) {
            precio += precio * MBebidaFria.INCREMENTO_TAMANO_GRANDE;
        }
        return precio;
    }
    gramosAzucar() {
        let subtotal = super.gramosAzucar() + MBebidaFria.AZUCAR_MEZCLA_FRIA;
        if (this.esGrande) {
            subtotal += subtotal * MBebidaFria.INCREMENTO_TAMANO_GRANDE;
        }
        return subtotal;
    }
    obtenerTipo() {
        return "Bebida Fría";
    }
}
MBebidaFria.INCREMENTO_TAMANO_GRANDE = 0.20;
MBebidaFria.AZUCAR_MEZCLA_FRIA = 12;
