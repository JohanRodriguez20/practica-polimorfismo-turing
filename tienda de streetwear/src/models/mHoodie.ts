import { MPrenda } from "./mPrenda.js";

export class MHoodie extends MPrenda {
    private _estampado: boolean;
    private _coleccionPasada: boolean;

constructor({
    codigo,
    marca,
    costo,
    estampado,
    coleccionPasada,
}: {
    codigo: string;
    marca: string;
    costo: number;
    estampado: boolean;
    coleccionPasada: boolean;
}) {
        super({ codigo, marca, costo });
        this._estampado = Boolean(estampado);
        this._coleccionPasada = Boolean(coleccionPasada);
    }
    public set estampado(estampado: boolean) {
        this._estampado = estampado;
    }

    public get estampado(): boolean {
        return this._estampado;
    }

    public set coleccionPasada(coleccionPasada: boolean) {
        this._coleccionPasada = coleccionPasada;
    }

    public get coleccionPasada(): boolean {
        return this._coleccionPasada;
    }
    override precioFinal(): number {
        let total = this.precioInicial();

        if (this._estampado) {
            total += 8;
        }

        if (this._coleccionPasada) {
            total -= 6;
        }

        return total;
    }

    override puntosDrop(): number {
        return this.puntosBase() * 2 - (this._coleccionPasada ? 2 : 0);
    }
}