import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {

  email = ""
  inbox = []
  listInbox(){
    this.es.sentService(this.email).subscribe(
      (data)=>{
        this.inbox = data['data'];
      }
    )
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.listInbox();
      // this.listInbox();
    }, 2000);
  }


  deleteFunction(idmessange) {
    this.es.deleteService(idmessange).subscribe(
      (data) => {
        if (data['result'] == "success") {
          alert("Inbox has been deleted")
          this.listInbox()
        }
        else {
          alert("Failed to delete inbox")
        }
      }
    )
  }

  constructor(public es:EmailService , private storage:Storage) { }

  async ngOnInit() {
    this.email = await this.storage.get('email')
    this.listInbox()
  }

}
