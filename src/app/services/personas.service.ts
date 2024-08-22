import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Persona } from '../data-models/personas.interface';

//Guardo en variables los datos de acceso proporcionados por la API de SUPABASE
let linkApi: string = "https://gkvuotievmftlpcpeohw.supabase.co/rest/v1/personas?select=*";
let apiKeySupa: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrdnVvdGlldm1mdGxwY3Blb2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NDMsImV4cCI6MjAzNTYyMjc0M30.SNV_r8uKELP0zLm4Q65aPmzXJygX1S8CFATxaDcRsXs";
let authorizationSupa: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrdnVvdGlldm1mdGxwY3Blb2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NDMsImV4cCI6MjAzNTYyMjc0M30.SNV_r8uKELP0zLm4Q65aPmzXJygX1S8CFATxaDcRsXs";

//Creo un Objeto headers para enviar las claves de autorización 
const headers = new HttpHeaders({
  apikey: apiKeySupa,
  Authorization: authorizationSupa
}) 

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //Instanciar la Clase HttpClient como parámetro del constructor
  constructor(private http: HttpClient) { }

  //Método para traer todos los registros de la API
  getAll(){
    //Agrego la interface Persona[] en forma de arreglo especificando el tipo de datos recibido
    return this.http.get<Persona[]>(linkApi, {headers});
  }

}
