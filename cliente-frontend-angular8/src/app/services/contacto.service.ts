import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private urlEndPoint = 'http://localhost:8080/api/contactos';

constructor(private http: HttpClient) { }

getContacto(id: number): Observable<any> {
  return this.http.get(`${this.urlEndPoint}/${id}`);
}

createContacto(contacto: Object): Observable<Object> {
  return this.http.post(`${this.urlEndPoint}`, contacto);
}

updateContacto(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.urlEndPoint}/${id}`, value);
}

deleteContacto(id: number): Observable<any> {
  return this.http.delete(`${this.urlEndPoint}/${id}`, { responseType: 'text' });
}

getContactosList(): Observable<any> {
  return this.http.get(`${this.urlEndPoint}`);
}

}
