import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { setInterval } from 'timers';
import { EmailService } from '../email.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email = ""
  
  inbox = []
  search:string ="";

  searchbar(ev: any){
    let search_value = ev.target.value
    this.search = search_value
    this.listInbox()
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

  staredFunction(status, idmessange) {
    if (status == 0) {
      this.es.staredService(idmessange).subscribe(
        (data) => {
          if (data['result'] == "success") {
            alert("Message Stared Success")
            this.listInbox()
          }
          else {
            alert("Message Stared Failed")
          }
        }
      )
    }
    else {
      this.es.unstaredService(idmessange).subscribe(
        (data) => {
          if (data['result'] == "success") {
            alert("Message UnStared Success")
            this.listInbox()
          }
          else {
            alert("Message UnStared Failed")
          }
        }
      )
    }

  }

  listInbox() {
    this.es.inboxService(this.email , this.search).subscribe(
      (data) => {
        this.inbox = data['data'];
      }
    )
  }
  constructor(public es: EmailService, private storage: Storage) {

  }
  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.listInbox();
      // this.listInbox();
    }, 2000);
  }

  async ngOnInit() {
    this.email = await this.storage.get('email')
    this.listInbox()
  }

}
