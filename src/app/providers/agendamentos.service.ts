import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  private url = "http://localhost:8080/api";

  constructor(private http:HttpClient) {  }

  agenda(agendamento){
    return this.http.post(this.url+'/agendamento/agenda',agendamento);
  }
}
