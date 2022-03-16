import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inboxstarred',
  templateUrl: './inboxstarred.component.html',
  styleUrls: ['./inboxstarred.component.scss'],
})
export class InboxstarredComponent implements OnInit {

  email = ""
  inbox = []
  listInbox(){
    this.es.inboxstaredService(this.email).subscribe(
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
    }, 2000);
  }
  constructor(public es:EmailService , private storage:Storage) { }

  async ngOnInit() {
    this.email = await this.storage.get('email')
    this.listInbox()
  }

}
