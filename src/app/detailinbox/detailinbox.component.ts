import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-detailinbox',
  templateUrl: './detailinbox.component.html',
  styleUrls: ['./detailinbox.component.scss'],
})
export class DetailinboxComponent implements OnInit {

  subject : string=""
  email_pengirim: string=""
  message:string=""
  waktu:Date
  image: string = ""
  idmessage:string = ""
  constructor(public es: EmailService, public at: ActivatedRoute) { }

  ngOnInit() {
    var id: number= this.at.snapshot.params['id']
    this.idmessage = id.toString()
    this.es.readService(id).subscribe(
      (data)=>{
      }
    )
    this.es.detailinboxService(id).subscribe(
      (data)=>{
        this.image = data[0]['idmessage']
        this.subject=data[0]['subject']
        this.email_pengirim=data[0]['email_pengirim']
        this.message=data[0]['message']
        this.waktu= data[0]['time']
      }
    )

    

  }



}
