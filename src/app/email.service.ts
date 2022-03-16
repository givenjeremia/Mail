import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  newEmailService(email_pengirim:string, email_penerima:string , subject:string,message:string , image:string): Observable<any>{
    let body = new HttpParams()
    body = body.set('email_pengirim',email_pengirim)
    body = body.set('email_penerima',email_penerima)
    body = body.set('subject',subject)
    body = body.set('message',message)
    body = body.set('image',image)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/newemail.php',body)
  }

  inboxService(email_penerima:string , search:string): Observable<any>{
    let body = new HttpParams()
    body = body.set('email_penerima',email_penerima)
    body = body.set('search',search)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/inbox.php',body)
  }

  detailinboxService(idmessage:number): Observable<any>{
    let body = new HttpParams()
    body = body.set('idmessage',idmessage)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/detailinbox.php',body)
  }

  inboxstaredService(email_penerima:string): Observable<any>{
    let body = new HttpParams()
    body = body.set('starred',"1")
    body = body.set('email_penerima',email_penerima)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/starred_email.php',body)
  }

  staredService(idmessage:number): Observable<any>{
    let body = new HttpParams()
    body = body.set('stared',"1")
    body = body.set('idmessage',idmessage)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/action.php',body)
  }
  unstaredService(idmessage:number): Observable<any>{
    let body = new HttpParams()
    body = body.set('unstared',"0")
    body = body.set('idmessage',idmessage)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/action.php',body)
  }

  readService(idmessage:number): Observable<any>{
    let body = new HttpParams()
    body = body.set('read',"1")
    body = body.set('idmessage',idmessage)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/action.php',body)
  }

  deleteService(idmessage:number): Observable<any>{
    let body = new HttpParams()
    body = body.set('idmessage',idmessage)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/delete_email.php',body)
  }

  sentService(email_pengirim:string): Observable<any>{
    let body = new HttpParams()
    body = body.set('email_pengirim',email_pengirim)
    return this.http.post('https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/sent_email.php',body)
  }





  constructor(private http:HttpClient) { }
}
