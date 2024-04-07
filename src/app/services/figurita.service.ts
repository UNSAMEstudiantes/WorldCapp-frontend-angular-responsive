import { USUARIO_LOGGED_ID } from './configuration'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core'
import { Figurita, FiguritaJSON } from '../domain/Figurita'
import { Observable, lastValueFrom, map } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { REST_SERVER_URL, handleError } from './configuration'
import { Filtros } from '../domain/Filtros'
import { FiguritaDetails, FiguritaDetailsJSON } from '../domain/FiguritaDetails'

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {

  constructor(private httpClient: HttpClient) { 
  }

  async getFiguritasBack(filtros?: Filtros) : Promise<Figurita[]> {
      const figuritas$ = this.httpClient.get<FiguritaJSON[]>(REST_SERVER_URL + '/busqueda-figuritas' + filtros?.generarUrl())
      const figuritasJSON = await lastValueFrom(figuritas$)

      return figuritasJSON.map(figuritaJSON => Figurita.fromJSON(figuritaJSON))
  }

  async getFiguritasMainBack(filtros?: Filtros) : Promise<Figurita[]> {
      const figuritas$ = this.httpClient.get<FiguritaJSON[]>(REST_SERVER_URL + '/main-busqueda-figuritas/'+ USUARIO_LOGGED_ID + filtros?.generarUrl())
      const figuritasJSON = await lastValueFrom(figuritas$)

      return figuritasJSON.map(figuritaJSON => Figurita.fromJSON(figuritaJSON))
  }

  async getFiguritaById(figuritaId: string, usuarioId: number): Promise<FiguritaDetails> {
    const figurita$ = this.httpClient.get<FiguritaDetailsJSON>(`${REST_SERVER_URL}/busqueda-figuritas/${figuritaId}`, {
    params: {usuarioId: usuarioId},})  
    const figuritaJSON= await lastValueFrom(figurita$)
    return FiguritaDetails.fromJSON(figuritaJSON)
  }

}