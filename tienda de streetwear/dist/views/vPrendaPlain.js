export default class vPrendaPlain {
    inCodigo;
    inMarca;
    inCosto;
    selTipo;
    chkAltaDemanda;
    chkEstampado;
    chkColeccionPasada;
    rowSneaker;
    rowHoodie;
    formulario;
    btCancelar;
    seccion;
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
        this.seccion = this.buscar("prenda");
        this.selTipo.onchange = () => this.actualizarCampos();
        this.actualizarCampos();
    }
    get codigo() { return this.inCodigo.value.trim(); }
    get marca() { return this.inMarca.value.trim(); }
    get costo() { return Number(this.inCosto.value); }
    get tipoPrenda() { return this.selTipo.value; }
    get altaDemanda() { return this.chkAltaDemanda.checked; }
    get estampado() { return this.chkEstampado.checked; }
    get coleccionPasada() { return this.chkColeccionPasada.checked; }
    onAceptar(callback) {
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            if (this.formulario.reportValidity()) {
                callback();
            }
        };
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.formulario.reset();
        this.actualizarCampos();
        this.seccion.hidden = false;
        this.inCodigo.focus();
    }
    ocultar() {
        this.seccion.hidden = true;
    }
    actualizarCampos() {
        this.rowSneaker.hidden = this.tipoPrenda !== "sneaker";
        this.rowHoodie.hidden = this.tipoPrenda !== "hoodie";
    }
    buscar(id) {
        const elemento = document.getElementById(id);
        if (!(elemento instanceof HTMLElement)) {
            throw new Error(`No se encontró el elemento requerido: ${id}`);
        }
        return elemento;
    }
}
//# sourceMappingURL=vPrendaPlain.js.map