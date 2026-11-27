import { MCafeteria } from "./models/MCafeteria.js";
import { vCafeteria } from "./views/vCafeteria.js";
import { cCafeteria } from "./controllers/cCafeteria.js";

const modelo = new MCafeteria();
const vista = new vCafeteria();
const controlador = new cCafeteria(modelo, vista);

controlador.iniciar();
