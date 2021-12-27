import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Startship } from '../model/startship';

@Injectable({
  providedIn: 'root'
})
export class StartshipService {

  constructor(private http :HttpClient) {    
  }
  
  listResultados(): Observable<Startship[]> {  
    return this.http.get<Startship[]>(`${environment.baseUrl}/resultados`);  
  } 

}
