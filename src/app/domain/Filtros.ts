export class Filtros{
    constructor(
        public nombre: string = "", 
        public desdeValor?: number, 
        public hastaValor?: number, 
        public onFire?: string, 
        public esPromesa?: string 
        ){}

    validarValoraciones(){
        if(Number(this.desdeValor) > Number(this.hastaValor)){
            throw new Error("El valor 'desde' no puede ser mayor que 'hasta'")
        }else if(Number(this.desdeValor) < 0 || Number(this.hastaValor) < 0){
            throw new Error("Los valores no pueden ser negativos")
        }
    }
    generarUrl(){
        if(this.desdeValor != undefined && this.hastaValor != undefined){
            return `?nombre=${this.nombre}&desdeValor=${this.desdeValor}&hastaValor=${this.hastaValor}&onFire=${this.onFire}&esPromesa=${this.esPromesa}`
        }else if(this.nombre == "" && this.desdeValor == undefined && this.hastaValor == undefined && this.onFire == undefined && this.esPromesa == undefined){
            return ``
        }
        else{
            return `?nombre=${this.nombre}&onFire=${this.onFire}&esPromesa=${this.esPromesa}`
        }
    }
}