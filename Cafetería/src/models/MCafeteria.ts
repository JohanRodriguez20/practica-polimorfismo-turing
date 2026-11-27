import { MBebida } from "./MBebida.js";

export class MCafeteria {
  private static readonly PRECIO_LIMITE: number = 4;
  private acMontoTotal: number = 0;
  private acGramosAzucar: number = 0;
  private cntBebidasMayorCuatro: number = 0;
  private cntBebidas: number = 0;

  procesarBebida(bebida: MBebida): void {
    const precioFinal = bebida.calcularPrecioFinal();
    this.acMontoTotal += precioFinal;
    this.acGramosAzucar += bebida.gramosAzucar();
    this.cntBebidas++;

    if (precioFinal > MCafeteria.PRECIO_LIMITE) {
      this.cntBebidasMayorCuatro++;
    }
  }

  montoTotalVentas(): number {
    return this.acMontoTotal;
  }

  cantidadBebidasMayorCuatro(): number {
    return this.cntBebidasMayorCuatro;
  }

  promedioGramosAzucar(): number {
    if (this.cntBebidas === 0) {
      return 0;
    }
    return this.acGramosAzucar / this.cntBebidas;
  }

  cantidadBebidas(): number {
    return this.cntBebidas;
  }

  reiniciar(): void {
    this.acMontoTotal = 0;
    this.acGramosAzucar = 0;
    this.cntBebidasMayorCuatro = 0;
    this.cntBebidas = 0;
  }
}
