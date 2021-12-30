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
  
  listResultados(danioA:number, danioB:number, danioC:number, velocidadLuz:number) {  
    return this.http.get(`${environment.baseUrl}/resultados?danioA=`+danioA+`&danioB=`+danioB+`&danioC=`+danioC+`&velocidadLuz=`+velocidadLuz);  
  } 

}
