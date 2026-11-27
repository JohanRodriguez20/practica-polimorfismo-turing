import { MCafeteria } from "../models/MCafeteria.js";
import { MBebida } from "../models/MBebida.js";
import { MCafeCaliente } from "../models/MCafeCaliente.js";
import { MBebidaFria } from "../models/MBebidaFria.js";
import { ICafeteriaView } from "../interfaces/ICafeteriaView.js";

export class cCafeteria {
  private modelo: MCafeteria;
  private vista: ICafeteriaView;

  constructor(modeloIny: MCafeteria, vistaIny: ICafeteriaView) {
    this.modelo = modeloIny;
    this.vista = vistaIny;
  }

  iniciar(): void {
    this.vista.onProcesar(() => this.procesarBebida());
    this.vista.onCargarCasosPrueba(() => this.cargarCasosPrueba());
    this.vista.onLimpiar(() => this.reiniciar());
    this.cargarCasosPrueba();
  }

  private registrarBebida(bebida: MBebida): void {
    this.modelo.procesarBebida(bebida);
    this.vista.reportarBebida(
      bebida.nombre,
      bebida.obtenerTipo(),
      bebida.precioBase,
      bebida.calcularPrecioFinal(),
      bebida.gramosAzucar()
    );
  }

  private actualizarResumen(): void {
    this.vista.reportarResumen(
      this.modelo.montoTotalVentas(),
      this.modelo.cantidadBebidasMayorCuatro(),
      this.modelo.promedioGramosAzucar(),
      this.modelo.cantidadBebidas()
    );
  }

  private procesarBebida(): void {
    const nombre = this.vista.nombre;
    const precioBase = this.vista.precioBase;
    const tipo = this.vista.tipo;

    if (!nombre) {
      this.vista.mostrarMensaje("Por favor, ingrese el nombre de la bebida.", "warning");
      return;
    }

    if (isNaN(precioBase) || precioBase <= 0) {
      this.vista.mostrarMensaje("El precio base debe ser un número positivo mayor a 0.", "danger");
      return;
    }

    let bebida: MBebida;

    if (tipo === "caliente") {
      bebida = new MCafeCaliente(nombre, precioBase, this.vista.conLecheVegetal);
    } else {
      bebida = new MBebidaFria(nombre, precioBase, this.vista.esGrande);
    }

    this.registrarBebida(bebida);
    this.actualizarResumen();
    this.vista.limpiarFormulario();
    this.vista.mostrarMensaje(`Bebida ${bebida.nombre} registrada correctamente.`, "success");
  }

  private cargarCasosPrueba(): void {
    this.modelo.reiniciar();
    this.vista.reiniciarVista();

    const bebida1 = new MCafeCaliente("Latte", 3, true);
    const bebida2 = new MBebidaFria("Frappé Mocha", 4, true);
    const bebida3 = new MCafeCaliente("Americano", 2.50, false);
    const bebida4 = new MBebidaFria("Matcha Helado", 4.50, false);

    this.registrarBebida(bebida1);
    this.registrarBebida(bebida2);
    this.registrarBebida(bebida3);
    this.registrarBebida(bebida4);

    this.actualizarResumen();
    this.vista.mostrarMensaje("Casos de prueba cargados correctamente.", "info");
  }

  private reiniciar(): void {
    this.modelo.reiniciar();
    this.vista.reiniciarVista();
    this.vista.mostrarMensaje("Ventas reiniciadas correctamente.", "info");
  }
}
