import * as dayjs from "dayjs"

export type FiguritaDetailsJSON = {
  id?: number,
  numeroFigurita?: number,
  nombre?: string,
  onFire?: boolean,
  valoracion?: number,
  peso?: number,
  altura?: number,
  nroCamiseta?: number,
  seleccion?: string,
  nacimiento?: string,
  cotizacion?: number,
  imagen?: string,
  cedidaPor?: {
    id: number,
    nombre: string,
    apellido: string,
    username: string,
  },
  posicion?: string,
  nivelImpresion?: string,
  copasDelMundo?: number,
  anioDeDebut?: string,
  confederacion?: string,
  copasConfederacion?: number,
  lider?: boolean,
}

export class FiguritaDetails {
  constructor(
    public id?: number,
    public numeroFigurita?: number,
    public nombre?: string,
    public onFire?: boolean,
    public valoracion?: number,
    public peso?: number,
    public altura?: number,
    public nroCamiseta?: number,
    public seleccion?: string,
    public nacimiento?: string,
    public cotizacion?: number,
    public imagen?: string,
    public cedidaPor?: {
      id: number,
      nombre: string,
      apellido: string,
      username: string,
    },
    public posicion?: string,
    public nivelImpresion?: string,
    public copasDelMundo?: number,
    public anioDeDebut?: string,
    public confederacion?: string,
    public copasConfederacion?: number,
    public lider?: boolean
  ) {}

  static fromJSON(figuritaDetailsJSON: FiguritaDetailsJSON): FiguritaDetails {
    return Object.assign(new FiguritaDetails(), figuritaDetailsJSON)
  }

  toJSON(): FiguritaDetailsJSON {
    return {
      id: this.id,
      numeroFigurita: this.numeroFigurita,
      nombre: this.nombre,
      onFire: this.onFire,
      valoracion: this.valoracion,
      peso: this.peso,
      altura: this.altura,
      nroCamiseta: this.nroCamiseta,
      seleccion: this.seleccion,
      nacimiento: this.nacimiento,
      cotizacion: this.cotizacion,
      imagen: this.imagen,
      cedidaPor: this.cedidaPor,
      posicion: this.posicion,
      nivelImpresion: this.nivelImpresion,
      copasDelMundo: this.copasDelMundo,
      anioDeDebut: this.anioDeDebut || "",
      confederacion: this.confederacion || "",
      copasConfederacion: this.copasConfederacion,
      lider: !!this.lider,
    }
  }

  edadJugador() {
    if (this.nacimiento) {
      const cumple = dayjs(this.nacimiento)
      const fechaHoy = dayjs()

      return fechaHoy.diff(cumple, "year")
    } else {
      return 0
    }
  }

  valoracionFigurita() {
    if (this.valoracion) {
      return this.valoracion + this.valorBase()
    } else {
      return 0
    }
  }

  valorBase() {
    return 100 * this.calculoNivel() * this.calculoSiEstaOnFire()
  }

  esPar() {
    return this.numeroFigurita ? this.numeroFigurita % 2 === 0 : false
  }

  calculoNivel() {
    if (this.nivelImpresion === "media" || this.nivelImpresion === "alta") {
      return 0.85
    } else {
      return 1
    }
  }

  calculoSiEstaOnFire() {
    if (this.onFire && this.esPar()) {
      return 1.20 * 1.10
    } else if (this.onFire) {
      return 1.20
    } else {
      return 1
    }
  }
}
