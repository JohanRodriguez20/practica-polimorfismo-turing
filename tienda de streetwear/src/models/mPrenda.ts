export abstract class MPrenda {
    protected _codigo: string;
    protected _marca: string;
    protected _costo: number;

    constructor({    
        codigo,  
        marca,
        costo
    }: {
        codigo: string,
        marca: string,
        costo: number
    }) {
        this._codigo = codigo.trim();
        this._marca = marca.trim();
        this._costo = +costo;
    }

    protected precioInicial(): number {
        return this._costo * 1.3;
    }

    puntosBase(): number {
        return Math.floor(this._costo / 10);
    }

    abstract precioFinal(): number;
    abstract puntosDrop(): number;


    set codigo(codigo: string) {
        this._codigo = codigo.trim();
    } 

    get codigo(): string {
        return this._codigo;
    }

    set marca(marca: string) {
        this._marca = marca.trim();
    }

    get marca(): string {
        return this._marca;
    }
    set costo(costo: number) {
        this._costo = +costo;
    }

    get costo(): number {
        return this._costo;
    }

    gananciaNeta(): number {
        return this.precioFinal() - this._costo;
    }
}