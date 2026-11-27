export class MStore {
    acGananciaTotal = 0;
    acTotalPuntosDrop = 0;
    auxCodigoMayor = "";
    mayorGanancia = Number.NEGATIVE_INFINITY;
    procesar(p) {
        const ganancia = p.gananciaNeta();
        this.acGananciaTotal += ganancia;
        this.acTotalPuntosDrop += p.puntosDrop();
        if (ganancia > this.mayorGanancia) {
            this.mayorGanancia = ganancia;
            this.auxCodigoMayor = p.codigo;
        }
    }
    getGananciaTotal() {
        return this.acGananciaTotal;
    }
    getCodigoMayor() {
        return this.auxCodigoMayor;
    }
    getTotalPuntosDrop() {
        return this.acTotalPuntosDrop;
    }
}
//# sourceMappingURL=mStore.js.map