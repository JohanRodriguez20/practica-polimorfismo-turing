import { iPrenda, TipoPrenda } from "../interfaces/iPrenda.js";

interface ModalBootstrap {
    show(): void;
    hide(): void;
}

declare const bootstrap: {
    Modal: new (elemento: HTMLElement) => ModalBootstrap;
};

export default class vPrendaBootstrap implements iPrenda {
    private readonly inCodigo: HTMLInputElement;
    private readonly inMarca: HTMLInputElement;
    private readonly inCosto: HTMLInputElement;
    private readonly selTipo: HTMLSelectElement;
    private readonly chkAltaDemanda: HTMLInputElement;
    private readonly chkEstampado: HTMLInputElement;
    private readonly chkColeccionPasada: HTMLInputElement;
    private readonly rowSneaker: HTMLElement;
    private readonly rowHoodie: HTMLElement;
    private readonly formulario: HTMLFormElement;
    private readonly btCancelar: HTMLButtonElement;
    private readonly modal: ModalBootstrap;

    constructor() {
        this.inCodigo = this.buscar("prd_inCodigo");
        this.inMarca = this.buscar("prd_inMarca");
        this.inCosto = this.buscar("prd_inCosto");
        this.selTipo = this.buscar("prd_selTipo");
        this.chkAltaDemanda = this.buscar("prd_chkAltaDemanda");
        this.chkEstampado = this.buscar("prd_chkEstampado");
        this.chkColeccionPasada = this.buscar("prd_chkColeccionPasada");
        this.rowSneaker = this.buscar("prd_rowSneaker");
        this.rowHoodie = this.buscar("prd_rowHoodie");
        this.formulario = this.buscar("prd_form");
        this.btCancelar = this.buscar("prd_btCancelar");

        const elementoModal = this.buscar("prenda");
        this.modal = new bootstrap.Modal(elementoModal);
        this.selTipo.onchange = () => this.actualizarCampos();
        this.actualizarCampos();
    }

    get codigo(): string { return this.inCodigo.value.trim(); }
    get marca(): string { return this.inMarca.value.trim(); }
    get costo(): number { return Number(this.inCosto.value); }
    get tipoPrenda(): TipoPrenda { return this.selTipo.value as TipoPrenda; }
    get altaDemanda(): boolean { return this.chkAltaDemanda.checked; }
    get estampado(): boolean { return this.chkEstampado.checked; }
    get coleccionPasada(): boolean { return this.chkColeccionPasada.checked; }

    onAceptar(callback: () => void): void {
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            if (this.formulario.reportValidity()) {
                callback();
            }
        };
    }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }

    mostrar(): void {
        this.formulario.reset();
        this.actualizarCampos();
        this.modal.show();
    }

    ocultar(): void {
        this.modal.hide();
    }

    private actualizarCampos(): void {
        this.rowSneaker.hidden = this.tipoPrenda !== "sneaker";
        this.rowHoodie.hidden = this.tipoPrenda !== "hoodie";
    }

    private buscar<T extends HTMLElement>(id: string): T {
        const elemento = document.getElementById(id);
        if (!(elemento instanceof HTMLElement)) {
            throw new Error(`No se encontró el elemento requerido: ${id}`);
        }
        return elemento as T;
    }
}
