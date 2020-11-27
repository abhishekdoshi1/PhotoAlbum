import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Variable } from '@angular/compiler/src/render3/r3_ast';


@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

private url : string = "/assets/JSON/User.JSON";

  constructor(private http : HttpClient ) { }

      GetuserData() : Observable <Variable[]>
      {
         return this.http.get<Variable[]>(this.url);
      }
}
