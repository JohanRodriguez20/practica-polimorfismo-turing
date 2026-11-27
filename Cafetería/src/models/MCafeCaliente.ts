import { MBebida } from "./MBebida.js";

export class MCafeCaliente extends MBebida {
  private static readonly RECARGO_LECHE_VEGETAL: number = 0.75;
  private static readonly FACTOR_AZUCAR_LECHE_VEGETAL: number = 0.5;
  private _conLecheVegetal: boolean = false;

  constructor(nombre: string, precioBase: number, conLecheVegetal: boolean) {
    super(nombre, precioBase);
    this.conLecheVegetal = conLecheVegetal;
  }

  set conLecheVegetal(valor: boolean) {
    this._conLecheVegetal = Boolean(valor);
  }

  get conLecheVegetal(): boolean {
    return this._conLecheVegetal;
  }

  override calcularPrecioFinal(): number {
    let precio = super.calcularPrecioFinal();
    if (this.conLecheVegetal) {
      precio += MCafeCaliente.RECARGO_LECHE_VEGETAL;
    }
    return precio;
  }

  override gramosAzucar(): number {
    const gramosBase = super.gramosAzucar();
    if (this.conLecheVegetal) {
      return gramosBase * MCafeCaliente.FACTOR_AZUCAR_LECHE_VEGETAL;
    }
    return gramosBase;
  }

  override obtenerTipo(): string {
    return "Café Caliente";
  }
}
