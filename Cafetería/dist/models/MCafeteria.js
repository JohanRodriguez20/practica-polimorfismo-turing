export class MCafeteria {
    constructor() {
        this.acMontoTotal = 0;
        this.acGramosAzucar = 0;
        this.cntBebidasMayorCuatro = 0;
        this.cntBebidas = 0;
    }
    procesarBebida(bebida) {
        const precioFinal = bebida.calcularPrecioFinal();
        this.acMontoTotal += precioFinal;
        this.acGramosAzucar += bebida.gramosAzucar();
        this.cntBebidas++;
        if (precioFinal > MCafeteria.PRECIO_LIMITE) {
            this.cntBebidasMayorCuatro++;
        }
    }
    montoTotalVentas() {
        return this.acMontoTotal;
    }
    cantidadBebidasMayorCuatro() {
        return this.cntBebidasMayorCuatro;
    }
    promedioGramosAzucar() {
        if (this.cntBebidas === 0) {
            return 0;
        }
        return this.acGramosAzucar / this.cntBebidas;
    }
    cantidadBebidas() {
        return this.cntBebidas;
    }
    reiniciar() {
        this.acMontoTotal = 0;
        this.acGramosAzucar = 0;
        this.cntBebidasMayorCuatro = 0;
        this.cntBebidas = 0;
    }
}
MCafeteria.PRECIO_LIMITE = 4;
