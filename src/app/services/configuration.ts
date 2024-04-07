/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpErrorResponse } from "@angular/common/http"

export const REST_SERVER_URL= 'http://localhost:9000'

export const USUARIO_LOGGED_ID = Number(sessionStorage.getItem('usuId'))

export function handleError(error: any): string{
    if(error instanceof HttpErrorResponse){
      console.log(error)
        if (error.status === 500) {
          return `Lo sentimos, pero ocurrió un problema inesperado en el servidor al intentar procesar su solicitud. Contacte con los desarrolladores.`
        } else if (error.status === 0) {
          return "No hay conexion con el backend, revise si el servidor remoto esta levantado"
        }
        else{
          return error.error.message
        }
      }else{
          return 'Se ha producido un error desconocido'
      }
}