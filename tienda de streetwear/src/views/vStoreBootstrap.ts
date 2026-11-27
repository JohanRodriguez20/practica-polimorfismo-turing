import { iStore } from "../interfaces/iStore.js";

export default class vStoreBootstrap implements iStore {
    private readonly btNuevaPrenda: HTMLButtonElement;
    private readonly tbPrendas: HTMLElement;
    private readonly lblGananciaTotal: HTMLElement;
    private readonly lblCodigoMayor: HTMLElement;
    private readonly lblTotalPuntosDrop: HTMLElement;

    constructor() {
        this.btNuevaPrenda = this.buscar("body_btNuevaPrenda");
        this.tbPrendas = this.buscar("body_tbPrendas");
        this.lblGananciaTotal = this.buscar("body_lblGananciaTotal");
        this.lblCodigoMayor = this.buscar("body_lblCodigoMayor");
        this.lblTotalPuntosDrop = this.buscar("body_lblTotalPuntosDrop");
    }

    onNuevaPrenda(callback: () => void): void {
        this.btNuevaPrenda.onclick = callback;
    }

    reportar(datos: {
        codigo: string;
        marca: string;
        costo: number;
        tipoPrenda: string;
        caracteristicas: string;
        precioFinal: number;
        gananciaNeta: number;
        puntosDrop: number;
        gananciaTotal: number;
        mayorCodigo: string;
        totalPuntosDrop: number;
    }): void {
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

    private agregarCelda(fila: HTMLTableRowElement, texto: string, clase = ""): void {
        const celda = document.createElement("td");
        celda.className = clase;
        celda.textContent = texto;
        fila.appendChild(celda);
    }

    private buscar<T extends HTMLElement>(id: string): T {
        const elemento = document.getElementById(id);
        if (!(elemento instanceof HTMLElement)) {
            throw new Error(`No se encontró el elemento requerido: ${id}`);
        }
        return elemento as T;
    }
}
