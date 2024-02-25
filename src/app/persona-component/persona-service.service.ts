import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private urlEndPoint:string = 'http://localhost:8080/api/personas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]>{
    
    return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Persona[] )
    );
  }

  create(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(this.urlEndPoint, persona, {headers:this.httpHeaders})
  }

  getPersona(id: any): Observable<Persona>{

    return this.http.get<Persona>(`${this.urlEndPoint}/${id}`)

  }

  update(persona: Persona): Observable<Persona>{

    return this.http.put<Persona>(`${this.urlEndPoint}/${persona.id}`, persona, {headers: this.httpHeaders})

  }

  delete(id:number): Observable<Persona>{

    return this.http.delete<Persona>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})

  }
}
