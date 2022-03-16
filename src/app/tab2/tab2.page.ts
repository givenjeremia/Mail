import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  email:string=""
  email_login:string=""
  name:string=""
  birthdate:string=""
  address:string=""
  edit:boolean = false
  profile=[]

  changeTrue(){
    this.edit = true
  }
  changeFalse(){
    this.edit = false
  }

  editProfile(){
    this.us.editProfileService(this.name,
      this.birthdate,this.address,this.email_login).subscribe(
        (data)=>{
          if(data['result']=='success'){
            alert("Edit Success");
            this.edit=false
          }
          else{
            alert("Edit Failed");
          }
        }
      )
  }


  constructor(public alertController: AlertController, private storage:Storage, public us:UsersService) {}

  async ngOnInit(){
    this.email_login = await this.storage.get('email')
    this.us.getProfileService(this.email_login).subscribe(
      (data)=>{
        this.email=data[0]['email']
        this.name=data[0]['nama']
        this.birthdate=data[0]['birthday']
        this.address=data[0]['address']
        
      }
    )
  }
}
