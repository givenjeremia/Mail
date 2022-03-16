import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  loginService(email:string,password:string): Observable<any>{
    let body = new HttpParams()
    body = body.set('email',email)
    body = body.set('password',password)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/login.php',body)
  }

  registerService(nama:string, birthday:string , email:string,password:string ,address:string ): Observable<any>{
    let body = new HttpParams()
    body = body.set('nama',nama)
    body = body.set('birthday',birthday)
    body = body.set('email',email)
    body = body.set('password',password)
    body = body.set('address',address)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/register.php',body)
  }

  getProfileService(email:string): Observable<any>{
    let body = new HttpParams()
    body = body.set('email_penerima',email)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/get_profile.php',body)
  }

 editProfileService(name:string, birthday:string,address:string,email_penerima: string): Observable<any>{
    let body = new HttpParams()
    body = body.set('name',name)
    
    body = body.set('birthday',birthday)
    body = body.set('address',address)
    body = body.set('email_penerima',email_penerima)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/edit_profile.php',body)
  }

  

  constructor(private http:HttpClient) { }
}
