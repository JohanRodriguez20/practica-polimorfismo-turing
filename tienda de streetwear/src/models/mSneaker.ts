import { MPrenda } from "./mPrenda.js";

export class MSneaker extends MPrenda {
    private _altaDemanda: boolean;

constructor({    
        codigo,  
        marca,
        costo,
        altaDemanda
    }: {
        codigo: string,
        marca: string,
        costo: number,
        altaDemanda:boolean
    }) {
        super({codigo, marca,costo});
        this._altaDemanda = Boolean(altaDemanda);
    }
    set altaDemanda(altaDemanda: boolean){
        this._altaDemanda = Boolean(altaDemanda);
    }

    get altaDemanda(): boolean{
        return this._altaDemanda;
    }
    override precioFinal(): number{
        let total = this.precioInicial() + 15;
        if(this.altaDemanda){
            total *= 1.1;
        }
        return total;
    }

    override puntosDrop(): number {
        return this.puntosBase() * 3 + (this.altaDemanda ? 10 : 0);
    }
}
