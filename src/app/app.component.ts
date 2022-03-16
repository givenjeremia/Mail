import { Component, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UsersService } from './users.service';
import { AlertController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  name_login = "";
  email = ''
  login_email=''
  login_password=''
  login_error=''
  
  //Regis
  cekRegister = ""
  name_regis = ""
  birthday_regis = ""
  email_regis = ""
  password_regis = ""
  addres_regis = ""

  async login(){
    this.us.loginService(this.login_email,this.login_password).subscribe(
      (data)=>{
        if(data['result']== 'success'){
          this.email = this.login_email;
          this.storage.set('email',this.email)
          this.login_email=''
          this.login_password=''
          this.storage.set('name_login',data['data'].nama)
          this.name_login = data['data'].nama
          
          alert("Login Success");
        }
        else{
          alert("Email Atau Password Salah");
        }
      }
    )
  }


  register(){

    this.us.registerService(this.name_regis , this.birthday_regis ,this.email_regis,this.password_regis , this.addres_regis).subscribe(
      (data)=>{
        if(data['result']== 'success'){
          alert("Register Success")
          this.cekRegister = ""
        }
        else{
          alert("Register Error : " +data['message'] )
        }
      }
    )
  }

  async logout(){
    await this.storage.remove('email');
    this.email = "";
  }

  constructor(public alertController: AlertController,private storage:Storage , public us:UsersService) {
  }




  async ngOnInit(){
    await this.storage.create();
    this.email = await this.storage.get('email');
    this.name_login = await this.storage.get('name_login')
  }


  

}
