export class MBebida {
  private static readonly GRAMOS_AZUCAR_BASE: number = 10;
  protected _nombre: string = "";
  protected _precioBase: number = 0;

  constructor(nombre: string, precioBase: number) {
    this.nombre = nombre;
    this.precioBase = precioBase;
  }

  set nombre(valor: string) {
    this._nombre = valor.trim();
  }

  get nombre(): string {
    return this._nombre;
  }

  set precioBase(valor: number) {
    this._precioBase = +valor;
  }

  get precioBase(): number {
    return this._precioBase;
  }

  calcularPrecioFinal(): number {
    return this.precioBase;
  }

  gramosAzucar(): number {
    return MBebida.GRAMOS_AZUCAR_BASE;
  }

  obtenerTipo(): string {
    return "Bebida";
  }
}
