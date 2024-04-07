import { Figurita } from "./Figurita"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TipoDeUsuario } from "./TipoDeUsuario"




export type usuarioJSON = 
  {
    nombre: string,
    apellido: string,
    userName: string,
    fechaDeNacimiento: Date,
    mail: string,
    direccion: {
        provincia: string,
        localidad: string,
        calle: string,
        altura: number,
        ubiGeografica: {
            "x": number,
            "y": number
        }
    },
    "distanciaMaxima":number,
    "tipo": TipoDeUsuario,
    "figuritasRepetidas" :Figurita[],
    "figuritasFaltantes" :Figurita[],
    "fotoPerfil":string,
    "edad":number,
}





export class Usuario {
  public figuritasRepetidas!: Figurita[]
  public figuritasFaltantes!: Figurita[]
  public fotoPerfil!:string
  public edad!:number

  constructor(
    public userName: string,
    public nombre: string,
    public mail: string,
    public apellido: string,
    public fechaDeNacimiento: Date,
    public direccion:Direccion,
    public distanciaMaxima: number,
    public tipo: TipoDeUsuario,
  ) { }

  getAge?(): number {
    const today = new Date()
    let age = today.getFullYear() - this.fechaDeNacimiento.getFullYear()
    const m = today.getMonth() - this.fechaDeNacimiento.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < this.fechaDeNacimiento.getDate())) {
      age--
    }

    return age
  }
}
export class Direccion {
  constructor(
    public provincia: string,
    public localidad: string,
    public calle: string,
    public altura: number,
    public ubiGeografica: Point
  ) {}
}

export class Point {
  constructor(
    public x: number,
    public y: number
  ) {}
}

export function parseJsonToUsuario(parsedJson: usuarioJSON): usuarioJSON {

  const usuario: usuarioJSON = {
    nombre: parsedJson.nombre,
    apellido: parsedJson.apellido,
    userName: parsedJson.userName,
    fechaDeNacimiento: parsedJson.fechaDeNacimiento,
    mail: parsedJson.mail,
    direccion: {
      provincia: parsedJson.direccion.provincia,
      localidad: parsedJson.direccion.localidad,
      calle: parsedJson.direccion.calle,
      altura: parsedJson.direccion.altura,
      ubiGeografica: {
        x: parsedJson.direccion.ubiGeografica.x,
        y: parsedJson.direccion.ubiGeografica.y
      }
    },
    distanciaMaxima: parsedJson.distanciaMaxima,
    tipo: parsedJson.tipo,
    figuritasFaltantes:parsedJson.figuritasFaltantes,
    figuritasRepetidas:parsedJson.figuritasRepetidas,
    fotoPerfil:parsedJson.fotoPerfil,
    edad:parsedJson.edad
  }

  return usuario
}
