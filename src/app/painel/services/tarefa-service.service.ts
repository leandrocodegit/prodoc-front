import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaServiceService {

  public reloadViewer = new EventEmitter

  constructor(private http: HttpClient) {

   }

   listaTarefas(): Observable<any[]> {
    const username = 'admin';
    const password = 'demo';

    // Codifica as credenciais em Base64
    const auth = btoa(`${username}:${password}`);

    const headers =  {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers" : "*",
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,POST,PUT",
         'Authorization': `Basic ${auth}`
      })}

    return this.http.get<any[]>('http://localhost:8080/engine-rest/filter/d0daf906-5bbe-11ef-94d0-641c676bc83b/list?firstResult=0&maxResults=15', headers)
  }

  xmlTarefa(id: string): Observable<any> {
    const username = 'admin';
    const password = 'demo';

    const auth = btoa(`${username}:${password}`);

    const headers =  {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers" : "*",
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,POST,PUT",
         'Authorization': `Basic ${auth}`
      })}

    return this.http.get<any>(`http://localhost:8080/engine-rest/process-definition/${id}/xml`, headers)
  }

  formularioTarefa(id: string): Observable<any> {
    const username = 'admin';
    const password = 'demo';

    const auth = btoa(`${username}:${password}`);

    const headers =  {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers" : "*",
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,POST,PUT",
         'Authorization': `Basic ${auth}`
      })}

    return this.http.get<any>(`http://localhost:8080/engine-rest/task/${id}/deployed-form`, headers)
  }

  variaveisTarefa(id: string): Observable<any> {

    let params = new HttpParams();
     params.append('processInstanceIdIn', '')



     return this.http.get<any>(`http://localhost:8080/engine-rest/task/${id}/variables`)
    }

    formularioProcesso(id: string): Observable<any> {

      let params = new HttpParams();
       params.append('processInstanceIdIn', '')

       return this.http.get<any>(`http://localhost:8080/engine-rest/deployment/cb7ff386-619b-11ef-9917-641c676bc83b/resources/cb801a97-619b-11ef-9917-641c676bc83b/data`)
      }
}
