export class vCafeteria {
    constructor() {
        this.salidaBebidas = "";
        this.salidaAzucar = "";
        this.inNombre = document.getElementById("inNombre");
        this.inPrecioBase = document.getElementById("inPrecioBase");
        this.selTipo = document.getElementById("selTipo");
        this.secCaliente = document.getElementById("secCaliente");
        this.chkLecheVegetal = document.getElementById("chkLecheVegetal");
        this.secFria = document.getElementById("secFria");
        this.chkGrande = document.getElementById("chkGrande");
        this.btnProcesar = document.getElementById("btnProcesar");
        this.btnCargarCasos = document.getElementById("btnCargarCasos");
        this.btnLimpiar = document.getElementById("btnLimpiar");
        this.tblReporteCuerpo = document.getElementById("tblReporteCuerpo");
        this.txtConsolaSalida = document.getElementById("txtConsolaSalida");
        this.txtSalidaAzucar = document.getElementById("txtSalidaAzucar");
        this.lblMontoTotal = document.getElementById("lblMontoTotal");
        this.lblBebidasMayorCuatro = document.getElementById("lblBebidasMayorCuatro");
        this.lblPromedioAzucar = document.getElementById("lblPromedioAzucar");
        this.lblTotalBebidas = document.getElementById("lblTotalBebidas");
        this.divMensaje = document.getElementById("divMensaje");
        this.actualizarCamposEspecificos(this.tipo);
        this.selTipo.addEventListener("change", () => {
            this.actualizarCamposEspecificos(this.tipo);
        });
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get precioBase() {
        return +this.inPrecioBase.value;
    }
    get tipo() {
        return this.selTipo.value.toLowerCase();
    }
    get conLecheVegetal() {
        return this.chkLecheVegetal.checked;
    }
    get esGrande() {
        return this.chkGrande.checked;
    }
    onProcesar(callback) {
        this.btnProcesar.onclick = callback;
    }
    onCargarCasosPrueba(callback) {
        this.btnCargarCasos.onclick = callback;
    }
    onLimpiar(callback) {
        this.btnLimpiar.onclick = callback;
    }
    onCambioTipo(callback) {
        this.selTipo.onchange = () => {
            this.actualizarCamposEspecificos(this.tipo);
            callback(this.tipo);
        };
    }
    actualizarCamposEspecificos(tipo) {
        if (tipo === "caliente") {
            this.secCaliente.style.display = "block";
            this.secFria.style.display = "none";
        }
        else {
            this.secCaliente.style.display = "none";
            this.secFria.style.display = "block";
        }
    }
    reportarBebida(nombre, tipo, precioBase, precioFinal, gramosAzucar) {
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
    reportarResumen(montoTotal, cantidadMayorCuatro, promedioAzucar, totalBebidas) {
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
    mostrarMensaje(mensaje, tipo) {
        if (this.divMensaje) {
            this.divMensaje.textContent = mensaje;
            this.divMensaje.style.color = tipo === "danger" ? "#b91c1c" : tipo === "warning" ? "#b45309" : "#15803d";
            this.divMensaje.style.display = "block";
            setTimeout(() => {
                if (this.divMensaje)
                    this.divMensaje.style.display = "none";
            }, 3000);
        }
    }
    limpiarFormulario() {
        this.inNombre.value = "";
        this.inPrecioBase.value = "";
        this.chkLecheVegetal.checked = false;
        this.chkGrande.checked = false;
        this.inNombre.focus();
    }
    reiniciarVista() {
        this.limpiarFormulario();
        this.salidaBebidas = "";
        this.salidaAzucar = "";
        if (this.tblReporteCuerpo)
            this.tblReporteCuerpo.innerHTML = "";
        if (this.txtConsolaSalida)
            this.txtConsolaSalida.textContent = "";
        if (this.txtSalidaAzucar)
            this.txtSalidaAzucar.textContent = "";
        if (this.lblMontoTotal)
            this.lblMontoTotal.textContent = "$0.00";
        if (this.lblBebidasMayorCuatro)
            this.lblBebidasMayorCuatro.textContent = "0";
        if (this.lblPromedioAzucar)
            this.lblPromedioAzucar.textContent = "0.00 g";
        if (this.lblTotalBebidas)
            this.lblTotalBebidas.textContent = "0";
        if (this.divMensaje)
            this.divMensaje.style.display = "none";
        console.clear();
    }
}
