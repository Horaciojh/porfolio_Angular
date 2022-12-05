
import { Injectable } from '@angular/core';
//suscribirse a Los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class DatosService {
//http = alias
  constructor (private http:HttpClient) {} //http puede ser cualquier nombre

  //metodo Observable que devuelve datos
  getDates():Observable <any>{ //getDates puede ser cualquier nombre
    //retorno de datos utilizando el método get ed HttpClient que LLama a La base de datos JSON O a una URL
    return this.http.get('../assets/bd/bd.json'); //esto retorna los datos de la linea 13 http:HttpClient
    //acá podria poner un callback para ver La opción de problema de conexión del servidor
 }
}
