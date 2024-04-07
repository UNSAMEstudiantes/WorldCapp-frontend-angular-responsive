import { firstValueFrom, lastValueFrom } from 'rxjs'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core'
import { Usuario, parseJsonToUsuario, usuarioJSON } from '../domain/Usuario'
import { Figurita, FiguritaJSON } from '../domain/Figurita'
import {HttpClient} from '@angular/common/http'
import { REST_SERVER_URL, USUARIO_LOGGED_ID } from './configuration'
// import { Observable, map } from 'rxjs'





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario !:Usuario
  constructor(private httpClient:HttpClient ) { }

  async getUsuario(): Promise<Usuario> {
        const usuario$ = this.httpClient.get<usuarioJSON>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}`)
        const usuarioJSON = await lastValueFrom(usuario$)
        return parseJsonToUsuario(usuarioJSON)
    }

    
    async actualizarUsuario(nuevosDatos: Partial<Usuario>) {
      this.usuario = { ...this.usuario, ...nuevosDatos }
        const body = parseJsonToUsuario(this.usuario)
        await this.httpClient.put<number>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}`, body).toPromise()
    }

  async getFiguritasRepetidas() : Promise<Figurita[]> {
      const figuritas$ = this.httpClient.get<FiguritaJSON[]>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/repetidas`)
      const figuritasJSON = await lastValueFrom(figuritas$)
      return figuritasJSON.map(figuritaJSON => Figurita.fromJSON(figuritaJSON))
  }

  async getFiguritasFaltantes(): Promise<Figurita[]> {
      const figuritas$ = this.httpClient.get<FiguritaJSON[]>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/faltantes`)
      const FiguritaJSON = await lastValueFrom(figuritas$)
      return FiguritaJSON.map(figuritaJSON => Figurita.fromJSON(figuritaJSON))
  }


  addFiguritaFaltante = async(figuritaId: number) => {
      const body = figuritaId
      await this.httpClient.put<number>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/agregar-faltantes`, body).toPromise()
  }

  addFiguritaRepetida= async(figuritaId: number) => {
      const body = figuritaId
      await this.httpClient.put<number>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/agregar-repetidas`, body).toPromise()
  }
  removeFiguritaRepetida = async(figuritaId: number) => {
      const body = figuritaId
      await this.httpClient.put<number>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/borrar-repetidas`, body).toPromise()
  }

  removeFiguritaFaltante = async(figuritaId: number) => {
      const body = figuritaId
      await this.httpClient.put<number>(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/borrar-faltantes`, body).toPromise()
  }


  async validarUsuario(username: string): Promise<void> { 
      const body = { userName: username } 
      const userNameId = await lastValueFrom(this.httpClient.post<number>(REST_SERVER_URL + '/login', body))
      sessionStorage.setItem('usuId',userNameId.toString())
  }


  async solicitarFigurita(figuritaId: number, idUsuarioSolicitante: number, cedidaPor: number): Promise<string> {
    const requestBody = { idUsuarioSolicitante, idFigurita: figuritaId, idUsuarioCedente: cedidaPor }
    const response = await firstValueFrom(this.httpClient.post<string>(
      `${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/solicitar-figurita`, requestBody))
    return response || 'Respuesta vacía del servidor'
  }
  
}  