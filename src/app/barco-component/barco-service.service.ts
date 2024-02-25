import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Barco } from './barco';

@Injectable({
  providedIn: 'root'
})
export class BarcoServiceService {

  private urlEndPoint:string = 'http://localhost:8080/api/barcos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getBarcos(): Observable<Barco[]>{

    return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Barco[] )
    );
  }

  create(barco: Barco):Observable<Barco>{
    return this.http.post<Barco>(this.urlEndPoint, barco, {headers:this.httpHeaders})
  }

  getBarco(id: any): Observable<Barco>{

    return this.http.get<Barco>(`${this.urlEndPoint}/${id}`)
  }

  update(barco: Barco): Observable<Barco>{

    return this.http.put<Barco>(`${this.urlEndPoint}/${barco.id}`, barco, {headers: this.httpHeaders})
  }

  delete(id:number): Observable<Barco>{

    return this.http.delete<Barco>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
