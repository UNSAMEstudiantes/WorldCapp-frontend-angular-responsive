export class Jugador {
  constructor(
    public id: number,
    public nombre: string,
    public onFire: boolean,
    public valoracion: number,
    public peso: number,
    public altura: number,
    public nroCamiseta: number,
    public seleccion: string,
    public nacimiento: Date,
    public cotizacion: number,
    public imagen: string
  ){}

  getAge(){
    const today = new Date()
    let age = today.getFullYear() - this.nacimiento.getFullYear()
    const m = today.getMonth() - this.nacimiento.getMonth()

    if( m < 0 || (m === 0 && today.getDate() < this.nacimiento.getDate())){
      age--
    }

    return age
  }
}
