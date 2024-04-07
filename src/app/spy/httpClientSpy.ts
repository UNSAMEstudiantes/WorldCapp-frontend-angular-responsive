/* eslint-disable @typescript-eslint/no-explicit-any */
import { of } from "rxjs"
import { Figurita } from "../domain/Figurita"
import { TipoDeUsuario } from "../domain/TipoDeUsuario"
import { Usuario, Direccion, Point, usuarioJSON } from "../domain/Usuario"
import { REST_SERVER_URL, USUARIO_LOGGED_ID } from "../services/configuration"
import { PuntoDeVenta } from './../domain/puntodeventa'

const usuarioTestCedidas: Usuario = new Usuario(
    'miuser',
    'luis',
    'correo@example.com',
    'Apellido',
    new Date(1990, 0, 1),
    new Direccion('Buenos Aires', 'La Plata', 'Calle Principal', 123, new Point(40.7128, -74.0060)),
    500,
    TipoDeUsuario.Desprendido
)

const usuarioTestCedidas2: Usuario = new Usuario(
    'miuser',
    'jorge',
    'correo@example.com',
    'Apellido',
    new Date(1990, 0, 1),
    new Direccion('Buenos Aires', 'La Plata', 'Calle Principal', 123, new Point(40.7128, -74.0060)),
    500,
    TipoDeUsuario.Desprendido
)


export const jugadorFaltante = new Figurita(
    1,
    11,
    'Lionel Messi',
    true,
    400,
    72,
    170,
    10,
    'Argentina',
    '1987-06-24',
    100000000,
    'Messi.jpg',
    {
        id: 1,
        nombre: usuarioTestCedidas.nombre,
        apellido: usuarioTestCedidas.apellido,
        username: usuarioTestCedidas.userName
    },
    'Delantero',
    'baja'
)

export const jugadorRepetido= new Figurita(
    2,
    77,
    'Cristiano Ronaldo',
    false,
    350,
    83,
    187,
    7,
    'Portugal',
    '1985-02-05',
    95000000,
    'Ronaldo.jpg',
    {
        id: 1,
        nombre: usuarioTestCedidas.nombre,
        apellido: usuarioTestCedidas.apellido,
        username: usuarioTestCedidas.userName
    },
    'Delantero',
    'media'
)


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const jugador3 = new Figurita(
    3,
    16,
    'Neymar Jr',
    true,
    340,
    68,
    175,
    10,
    'Brasil',
    '1992-02-05',
    85000000,
    'Neymar.jpg'
)

export const usuarioTest: Usuario = new Usuario(
    'admin',
    'Nombre',
    'correo@example.com',
    'Apellido',
    new Date(1990, 0, 1),
    new Direccion('Buenos Aires', 'La Plata', 'Calle Principal', 123, new Point(40.7128, -74.0060)),
    500,
    TipoDeUsuario.Par
)   

export const usuarioTestPunto =  new Usuario(
    "juan",
    "lopez",
    "admin",
    "juan@mail.com",
    new Date(1992, 1, 5),
    new Direccion("Buenos Aires", "San Martin", "calle", 2345, new Point(-34.57813776963215, -58.52762521767519)),
    7.0,
    TipoDeUsuario.Desprendido
)

export const KioskoXeneizeTest = new PuntoDeVenta(
    "Kiosko",
    "Xeneize",
	"Triunvirato 1451, San Martin",
	77,
	-34.57107295792488,
	-58.53777599103668,
	[],
	1287.0,
	1.216902057710009
)

export const LibreriaPepeTest = new PuntoDeVenta(
    "Libreria",
	"Pepe",
	"Saenz Peña 2345, Chascomus",
	100,
	-35.58278277518326,
	-58.00807533670503,
	[],
	13497.000000000002,
	121.3029348799844
)

export const SupermercadoDiaTest = new PuntoDeVenta(
   "Supermercado",
	"Dia",
	"Jose Hernandez 8989, Castelar",
	50,
	-34.63482727236517,
	-58.62935700007068,
	 [],
	1270.0,
	11.243805855409226
)

usuarioTest.figuritasRepetidas = [ jugadorRepetido]

usuarioTest.figuritasFaltantes = [jugadorFaltante]

usuarioTestCedidas.figuritasRepetidas = [jugadorRepetido, jugadorFaltante]
usuarioTestCedidas2.figuritasFaltantes = [jugadorRepetido]

const PuntoDeVentaStub = [SupermercadoDiaTest, LibreriaPepeTest ,KioskoXeneizeTest].map((PuntoDeVenta) =>PuntoDeVenta.toJSON())
const PuntoDeVentaMasSobresStub = [LibreriaPepeTest, KioskoXeneizeTest ,SupermercadoDiaTest].map((PuntoDeVenta) =>PuntoDeVenta.toJSON())
const PuntoDeVentaMenorDistanciaStub = [KioskoXeneizeTest, SupermercadoDiaTest, LibreriaPepeTest].map((PuntoDeVenta) =>PuntoDeVenta.toJSON())
const PuntoDeVentaMasBaratosStub = [SupermercadoDiaTest, KioskoXeneizeTest, LibreriaPepeTest].map((PuntoDeVenta) =>PuntoDeVenta.toJSON())
const PuntoDeVentaMascercanosStub = [KioskoXeneizeTest].map((PuntoDeVenta) =>PuntoDeVenta.toJSON())

const faltantesStub = usuarioTest.figuritasFaltantes.map((figurita) =>figurita.toJSON())
const repetidasStub = usuarioTest.figuritasRepetidas.map((figurita) =>figurita.toJSON())
const repetidasTotalStub = [jugadorRepetido, jugadorFaltante].map((figurita) => figurita.toJSON())
const repetidasFiltradasStub = [jugadorFaltante].map((figurita) => figurita.toJSON()) 
const puntoBuscadoStub = [KioskoXeneizeTest].map((PuntoDeVenta) => PuntoDeVenta.toJSON())

const usuarioTestStub = userToJson(usuarioTest)




export const HttpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put'])

HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/faltantes`).and.returnValue(of(faltantesStub))
HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/repetidas`).and.returnValue(of(repetidasStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL+'/usuarios/' +USUARIO_LOGGED_ID).and.returnValue(of(usuarioTestStub))
HttpClientSpy.put.withArgs(REST_SERVER_URL+'/usuarios/' +USUARIO_LOGGED_ID).and.returnValue(of())
HttpClientSpy.put.withArgs(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/repetidas`).and.returnValue(of(faltantesStub[0]))
HttpClientSpy.put.withArgs(`${REST_SERVER_URL}/usuarios/${USUARIO_LOGGED_ID}/faltantes`).and.returnValue(of(repetidasStub[0]))
HttpClientSpy.get.withArgs(REST_SERVER_URL + '/busqueda-figuritas').and.returnValue(of(repetidasTotalStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL + '/busqueda-figuritas?nombre=messi').and.returnValue(of(repetidasFiltradasStub))

HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosdeventa/${USUARIO_LOGGED_ID}/Ordenado?tipoOrden=&nombreABuscar=`).and.returnValue(of(PuntoDeVentaStub))
HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosdeventa/${USUARIO_LOGGED_ID}/Ordenado?tipoOrden=&nombreABuscar=xen`).and.returnValue(of(puntoBuscadoStub))
HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosdeventa/${USUARIO_LOGGED_ID}/Ordenado?tipoOrden=massobres&nombreABuscar=`).and.returnValue(of(PuntoDeVentaMasSobresStub))
HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosdeventa/${USUARIO_LOGGED_ID}/Ordenado?tipoOrden=menordistancia&nombreABuscar=`).and.returnValue(of(PuntoDeVentaMenorDistanciaStub))
HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosdeventa/${USUARIO_LOGGED_ID}/Ordenado?tipoOrden=mascercano&nombreABuscar=`).and.returnValue(of(PuntoDeVentaMascercanosStub))
HttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosdeventa/${USUARIO_LOGGED_ID}/Ordenado?tipoOrden=masbaratos&nombreABuscar=`).and.returnValue(of(PuntoDeVentaMasBaratosStub))

HttpClientSpy.get.withArgs("http://localhost:9000/busqueda-figuritas?nombre=messi&onFire=undefined&esPromesa=undefined").and.returnValue(of(repetidasFiltradasStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL +"/busqueda-figuritas?nombre=lionel&onFire=undefined&esPromesa=undefined").and.returnValue(of(repetidasFiltradasStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL +"/busqueda-figuritas?nombre=argentina&onFire=undefined&esPromesa=undefined").and.returnValue(of(repetidasFiltradasStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL +"/busqueda-figuritas?nombre=1&onFire=undefined&esPromesa=undefined").and.returnValue(of(repetidasFiltradasStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL +"/busqueda-figuritas?nombre=&onFire=true&esPromesa=false").and.returnValue(of(repetidasFiltradasStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL +"/busqueda-figuritas?nombre=&desdeValor=400&hastaValor=600&onFire=true&esPromesa=false").and.returnValue(of(repetidasTotalStub))
HttpClientSpy.get.withArgs(REST_SERVER_URL +"/busqueda-figuritas?nombre=&desdeValor=700&hastaValor=800&onFire=false&esPromesa=false").and.returnValue(of([]))
HttpClientSpy.post.and.callFake((_url: string, body: any) => body.userName == 'admin')

function userToJson(usuario: Usuario): usuarioJSON{
    return {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            userName: usuario.userName,
            fechaDeNacimiento: usuario.fechaDeNacimiento,
            mail: usuario.mail,
            direccion: {
              provincia: usuario.direccion.provincia,
              localidad: usuario.direccion.localidad,
              calle: usuario.direccion.calle,
              altura: usuario.direccion.altura,
              ubiGeografica: {
                x: usuario.direccion.ubiGeografica.x,
                y: usuario.direccion.ubiGeografica.y
              }
            },
            distanciaMaxima: usuario.distanciaMaxima,
            tipo: usuario.tipo,
            figuritasFaltantes:usuario.figuritasFaltantes,
            figuritasRepetidas:usuario.figuritasRepetidas,
            fotoPerfil:usuario.fotoPerfil,
            edad:usuario.edad
          }
}