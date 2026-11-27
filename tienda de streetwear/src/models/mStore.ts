import { MPrenda } from "./mPrenda.js";

export class MStore {
    private acGananciaTotal = 0;
    private acTotalPuntosDrop = 0;
    private auxCodigoMayor = "";
    private mayorGanancia = Number.NEGATIVE_INFINITY;

    procesar(p: MPrenda): void {
        const ganancia = p.gananciaNeta();
        this.acGananciaTotal += ganancia;
        this.acTotalPuntosDrop += p.puntosDrop();

        if (ganancia > this.mayorGanancia) {
            this.mayorGanancia = ganancia;
            this.auxCodigoMayor = p.codigo;
        }
    }

    getGananciaTotal(): number {
        return this.acGananciaTotal;
    }

    getCodigoMayor(): string {
        return this.auxCodigoMayor;
    }

    getTotalPuntosDrop(): number {
        return this.acTotalPuntosDrop;
    }
}