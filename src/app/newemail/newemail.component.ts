import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { EmailService } from '../email.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-newemail',
  templateUrl: './newemail.component.html',
  styleUrls: ['./newemail.component.scss'],
})
export class NewemailComponent implements OnInit {

  email_pengirim = "";
  email_penerima = ""
  subject = ""
  message = ""
  default_image = 'https://ubaya.fun/hybrid/160419118/JanjiJiwaMail/image/add_image.png';
  image = this.default_image
  Upload = 0

  openMenu(){
    this.Upload = 1
  }

  cameraInput(){
    this.pickImage(this.camera.PictureSourceType.CAMERA)
  }
  galeryInput(){
    this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY)
  }
  
  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.Upload = 0
    }, (err) => {
      // Handle error
    });
  }

  newEmail() {
    if(this.image != this.default_image){
      this.es.newEmailService(this.email_pengirim, this.email_penerima, this.subject, this.message, this.image).subscribe(
        (data) => {
          if (data['result'] == 'success') {
            alert("Email Berhasil Terkirim") 
            this.router.navigate(['/'])
          }
          else {
            alert("Email Belum Berhasil Terkirim")
          }
        }
      )
    }
    else{
      alert("Harap Upload Image")
    }
    
  }

  // ambilFoto() {
  //   this.camera.getPicture(this.options).then(
  //     (imageData) => {
  //       let base64Image = 'data:image/jpeg;base64,' + imageData;
  //       this.image = base64Image;
  //     }, (err) => {
  //       // kalau error
  //     }
  //   );
  // }

  constructor(private router: Router, private storage: Storage, public es: EmailService, public camera: Camera) { }

  mydate: string = Date.now.toString();

  async ngOnInit() {
    this.email_pengirim = await this.storage.get('email')
  }

}
