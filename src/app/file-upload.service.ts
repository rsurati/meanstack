import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { from, throwError} from 'rxjs'
import { catchError, map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {



  constructor(private http:HttpClient) {


    
   }

   upload(body:any)
 {
   return this.http.post('http://localhost:3000/upload',body,{
   observe:'body'
   });
 }

}
