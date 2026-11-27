export interface ICafeteriaView {
  get nombre(): string;
  get precioBase(): number;
  get tipo(): string;
  get conLecheVegetal(): boolean;
  get esGrande(): boolean;

  onProcesar(callback: () => void): void;
  onCargarCasosPrueba(callback: () => void): void;
  onLimpiar(callback: () => void): void;
  onCambioTipo(callback: (tipo: string) => void): void;

  reportarBebida(nombre: string, tipo: string, precioBase: number, precioFinal: number, gramosAzucar: number): void;
  reportarResumen(montoTotal: number, cantidadMayorCuatro: number, promedioAzucar: number, totalBebidas: number): void;
  mostrarMensaje(mensaje: string, tipo: "success" | "danger" | "info" | "warning"): void;
  actualizarCamposEspecificos(tipo: string): void;
  limpiarFormulario(): void;
  reiniciarVista(): void;
}
