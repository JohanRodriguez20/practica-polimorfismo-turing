import { MBebida } from "./MBebida.js";

export class MBebidaFria extends MBebida {
  private static readonly INCREMENTO_TAMANO_GRANDE: number = 0.20;
  private static readonly AZUCAR_MEZCLA_FRIA: number = 12;
  private _esGrande: boolean = false;

  constructor(nombre: string, precioBase: number, esGrande: boolean) {
    super(nombre, precioBase);
    this.esGrande = esGrande;
  }

  set esGrande(valor: boolean) {
    this._esGrande = Boolean(valor);
  }

  get esGrande(): boolean {
    return this._esGrande;
  }

  override calcularPrecioFinal(): number {
    let precio = super.calcularPrecioFinal();
    if (this.esGrande) {
      precio += precio * MBebidaFria.INCREMENTO_TAMANO_GRANDE;
    }
    return precio;
  }

  override gramosAzucar(): number {
    let subtotal = super.gramosAzucar() + MBebidaFria.AZUCAR_MEZCLA_FRIA;
    if (this.esGrande) {
      subtotal += subtotal * MBebidaFria.INCREMENTO_TAMANO_GRANDE;
    }
    return subtotal;
  }

  override obtenerTipo(): string {
    return "Bebida Fría";
  }
}
