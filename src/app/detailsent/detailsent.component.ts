import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-detailsent',
  templateUrl: './detailsent.component.html',
  styleUrls: ['./detailsent.component.scss'],
})
export class DetailsentComponent implements OnInit {

  subject : string=""
  email_penerima: string=""
  message:string=""
  waktu:Date
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
        this.subject=data[0]['subject']
        this.email_penerima=data[0]['email_penerima']
        this.message=data[0]['message']
        this.waktu= data[0]['time']
      }
    )

  }

}
