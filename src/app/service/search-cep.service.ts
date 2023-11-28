import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchCepService {

  urlAPI = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {
  }

  getSearchCep(cep: string){
    return this.http.get(`${this.urlAPI}${cep}/json`);
  }

}
