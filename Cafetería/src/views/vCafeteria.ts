import { ICafeteriaView } from "../interfaces/ICafeteriaView.js";

export class vCafeteria implements ICafeteriaView {
  private inNombre: HTMLInputElement;
  private inPrecioBase: HTMLInputElement;
  private selTipo: HTMLSelectElement;

  private secCaliente: HTMLElement;
  private chkLecheVegetal: HTMLInputElement;

  private secFria: HTMLElement;
  private chkGrande: HTMLInputElement;

  private btnProcesar: HTMLButtonElement;
  private btnCargarCasos: HTMLButtonElement;
  private btnLimpiar: HTMLButtonElement;

  private tblReporteCuerpo: HTMLElement;
  private txtConsolaSalida: HTMLElement;
  private txtSalidaAzucar: HTMLElement;
  private lblMontoTotal: HTMLElement;
  private lblBebidasMayorCuatro: HTMLElement;
  private lblPromedioAzucar: HTMLElement;
  private lblTotalBebidas: HTMLElement;
  private divMensaje: HTMLElement;
  private salidaBebidas: string = "";
  private salidaAzucar: string = "";

  constructor() {
    this.inNombre = document.getElementById("inNombre") as HTMLInputElement;
    this.inPrecioBase = document.getElementById("inPrecioBase") as HTMLInputElement;
    this.selTipo = document.getElementById("selTipo") as HTMLSelectElement;

    this.secCaliente = document.getElementById("secCaliente") as HTMLElement;
    this.chkLecheVegetal = document.getElementById("chkLecheVegetal") as HTMLInputElement;

    this.secFria = document.getElementById("secFria") as HTMLElement;
    this.chkGrande = document.getElementById("chkGrande") as HTMLInputElement;

    this.btnProcesar = document.getElementById("btnProcesar") as HTMLButtonElement;
    this.btnCargarCasos = document.getElementById("btnCargarCasos") as HTMLButtonElement;
    this.btnLimpiar = document.getElementById("btnLimpiar") as HTMLButtonElement;

    this.tblReporteCuerpo = document.getElementById("tblReporteCuerpo") as HTMLElement;
    this.txtConsolaSalida = document.getElementById("txtConsolaSalida") as HTMLElement;
    this.txtSalidaAzucar = document.getElementById("txtSalidaAzucar") as HTMLElement;
    this.lblMontoTotal = document.getElementById("lblMontoTotal") as HTMLElement;
    this.lblBebidasMayorCuatro = document.getElementById("lblBebidasMayorCuatro") as HTMLElement;
    this.lblPromedioAzucar = document.getElementById("lblPromedioAzucar") as HTMLElement;
    this.lblTotalBebidas = document.getElementById("lblTotalBebidas") as HTMLElement;
    this.divMensaje = document.getElementById("divMensaje") as HTMLElement;

    this.actualizarCamposEspecificos(this.tipo);
    this.selTipo.addEventListener("change", () => {
      this.actualizarCamposEspecificos(this.tipo);
    });
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get precioBase(): number {
    return +this.inPrecioBase.value;
  }

  get tipo(): string {
    return this.selTipo.value.toLowerCase();
  }

  get conLecheVegetal(): boolean {
    return this.chkLecheVegetal.checked;
  }

  get esGrande(): boolean {
    return this.chkGrande.checked;
  }

  onProcesar(callback: () => void): void {
    this.btnProcesar.onclick = callback;
  }

  onCargarCasosPrueba(callback: () => void): void {
    this.btnCargarCasos.onclick = callback;
  }

  onLimpiar(callback: () => void): void {
    this.btnLimpiar.onclick = callback;
  }

  onCambioTipo(callback: (tipo: string) => void): void {
    this.selTipo.onchange = () => {
      this.actualizarCamposEspecificos(this.tipo);
      callback(this.tipo);
    };
  }

  actualizarCamposEspecificos(tipo: string): void {
    if (tipo === "caliente") {
      this.secCaliente.style.display = "block";
      this.secFria.style.display = "none";
    } else {
      this.secCaliente.style.display = "none";
      this.secFria.style.display = "block";
    }
  }

  reportarBebida(
    nombre: string,
    tipo: string,
    precioBase: number,
    precioFinal: number,
    gramosAzucar: number
  ): void {
    const lineaPrecio = `${nombre}: $${precioFinal.toFixed(2)}`;
    const lineaAzucar = `${nombre} -> Azúcar: ${gramosAzucar.toFixed(2)} g`;
    console.log(lineaPrecio);
    console.log(lineaAzucar);

    this.salidaBebidas += `${lineaPrecio}\n`;
    this.salidaAzucar += `${lineaAzucar}\n`;

    if (this.txtConsolaSalida) {
      this.txtConsolaSalida.textContent = this.salidaBebidas;
    }

    if (this.txtSalidaAzucar) {
      this.txtSalidaAzucar.textContent = this.salidaAzucar;
    }

    if (this.tblReporteCuerpo) {
      const fila = document.createElement("tr");

      const tdNombre = document.createElement("td");
      tdNombre.textContent = nombre;

      const tdTipo = document.createElement("td");
      tdTipo.textContent = tipo;

      const tdBase = document.createElement("td");
      tdBase.textContent = `$${precioBase.toFixed(2)}`;

      const tdFinal = document.createElement("td");
      tdFinal.textContent = `$${precioFinal.toFixed(2)}`;

      const tdAzucar = document.createElement("td");
      tdAzucar.textContent = `${gramosAzucar.toFixed(2)} g`;

      fila.appendChild(tdNombre);
      fila.appendChild(tdTipo);
      fila.appendChild(tdBase);
      fila.appendChild(tdFinal);
      fila.appendChild(tdAzucar);
      this.tblReporteCuerpo.appendChild(fila);
    }
  }

  reportarResumen(
    montoTotal: number,
    cantidadMayorCuatro: number,
    promedioAzucar: number,
    totalBebidas: number
  ): void {
    const lineaTotal = `Monto total de ventas: $${montoTotal.toFixed(2)}`;
    const lineaMayores = `Bebidas con precio mayor a $4: ${cantidadMayorCuatro}`;
    const lineaAzucar = `Promedio de azúcar por bebida: ${promedioAzucar.toFixed(2)} g`;

    console.log("");
    console.log(lineaTotal);
    console.log(lineaMayores);
    console.log(lineaAzucar);

    if (this.txtConsolaSalida) {
      this.txtConsolaSalida.textContent = `${this.salidaBebidas}\n${lineaTotal}\n${lineaMayores}`;
    }

    if (this.txtSalidaAzucar) {
      this.txtSalidaAzucar.textContent = `${this.salidaAzucar}\n${lineaAzucar}`;
    }

    if (this.lblMontoTotal) {
      this.lblMontoTotal.textContent = `$${montoTotal.toFixed(2)}`;
    }
    if (this.lblBebidasMayorCuatro) {
      this.lblBebidasMayorCuatro.textContent = `${cantidadMayorCuatro}`;
    }
    if (this.lblPromedioAzucar) {
      this.lblPromedioAzucar.textContent = `${promedioAzucar.toFixed(2)} g`;
    }
    if (this.lblTotalBebidas) {
      this.lblTotalBebidas.textContent = `${totalBebidas}`;
    }
  }

  mostrarMensaje(mensaje: string, tipo: "success" | "danger" | "info" | "warning"): void {
    if (this.divMensaje) {
      this.divMensaje.textContent = mensaje;
      this.divMensaje.style.color = tipo === "danger" ? "#b91c1c" : tipo === "warning" ? "#b45309" : "#15803d";
      this.divMensaje.style.display = "block";
      setTimeout(() => {
        if (this.divMensaje) this.divMensaje.style.display = "none";
      }, 3000);
    }
  }

  limpiarFormulario(): void {
    this.inNombre.value = "";
    this.inPrecioBase.value = "";
    this.chkLecheVegetal.checked = false;
    this.chkGrande.checked = false;
    this.inNombre.focus();
  }

  reiniciarVista(): void {
    this.limpiarFormulario();
    this.salidaBebidas = "";
    this.salidaAzucar = "";
    if (this.tblReporteCuerpo) this.tblReporteCuerpo.innerHTML = "";
    if (this.txtConsolaSalida) this.txtConsolaSalida.textContent = "";
    if (this.txtSalidaAzucar) this.txtSalidaAzucar.textContent = "";
    if (this.lblMontoTotal) this.lblMontoTotal.textContent = "$0.00";
    if (this.lblBebidasMayorCuatro) this.lblBebidasMayorCuatro.textContent = "0";
    if (this.lblPromedioAzucar) this.lblPromedioAzucar.textContent = "0.00 g";
    if (this.lblTotalBebidas) this.lblTotalBebidas.textContent = "0";
    if (this.divMensaje) this.divMensaje.style.display = "none";
    console.clear();
  }
}
