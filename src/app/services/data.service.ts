import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {  }

    // Se modifica la url dependiendo de la data que se desee leer
    getQuery (query: string) {
      const url=`https://rayentutorialtestapp.azurewebsites.net/tutorial${query}`;
      return this.http.get(url);
    }

    // Se filtra la data de la propiedad que se quiera obtener
    getData() {
      return this.getQuery('s')
        // .pipe(map(resp => resp['data']));
    }
}
