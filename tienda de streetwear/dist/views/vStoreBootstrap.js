export default class vStoreBootstrap {
    btNuevaPrenda;
    tbPrendas;
    lblGananciaTotal;
    lblCodigoMayor;
    lblTotalPuntosDrop;
    constructor() {
        this.btNuevaPrenda = this.buscar("body_btNuevaPrenda");
        this.tbPrendas = this.buscar("body_tbPrendas");
        this.lblGananciaTotal = this.buscar("body_lblGananciaTotal");
        this.lblCodigoMayor = this.buscar("body_lblCodigoMayor");
        this.lblTotalPuntosDrop = this.buscar("body_lblTotalPuntosDrop");
    }
    onNuevaPrenda(callback) {
        this.btNuevaPrenda.onclick = callback;
    }
    reportar(datos) {
        const fila = document.createElement("tr");
        this.agregarCelda(fila, datos.codigo);
        this.agregarCelda(fila, datos.marca);
        this.agregarCelda(fila, `$${datos.costo.toFixed(2)}`, "text-end");
        this.agregarCelda(fila, datos.tipoPrenda);
        this.agregarCelda(fila, datos.caracteristicas);
        this.agregarCelda(fila, `$${datos.precioFinal.toFixed(2)}`, "text-end");
        this.agregarCelda(fila, `$${datos.gananciaNeta.toFixed(2)}`, "text-end");
        this.agregarCelda(fila, `${datos.puntosDrop} pts`, "text-end");
        this.tbPrendas.appendChild(fila);
        this.lblGananciaTotal.textContent = `$${datos.gananciaTotal.toFixed(2)}`;
        this.lblCodigoMayor.textContent = datos.mayorCodigo;
        this.lblTotalPuntosDrop.textContent = `${datos.totalPuntosDrop} pts`;
    }
    agregarCelda(fila, texto, clase = "") {
        const celda = document.createElement("td");
        celda.className = clase;
        celda.textContent = texto;
        fila.appendChild(celda);
    }
    buscar(id) {
        const elemento = document.getElementById(id);
        if (!(elemento instanceof HTMLElement)) {
            throw new Error(`No se encontró el elemento requerido: ${id}`);
        }
        return elemento;
    }
}
//# sourceMappingURL=vStoreBootstrap.js.map