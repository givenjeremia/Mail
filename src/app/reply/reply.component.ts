import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {

  idmessage:string
  email_penerima:string
  email_pengirim:string
  subject:string
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

  reply(){

    if(this.image != this.default_image){
      this.es.newEmailService(this.email_pengirim, this.email_penerima, this.subject, this.message, this.image).subscribe(
        (data) => {
          if (data['result'] == 'success') {
            alert("Reply Berhasil Terkirim") 
            this.router.navigate(['/detailinbox/'+this.idmessage])
          }
          else {
            alert("Reply Belum Berhasil Terkirim")
          }
        }
      )
    }
    else{
      alert("Harap Upload Image")
    }
    
  }
  
  constructor(private router: Router, public es: EmailService, public at: ActivatedRoute , public camera: Camera){ }

  async ngOnInit() {
    var id: number= this.at.snapshot.params['id']
    this.idmessage = id.toString()
    this.es.detailinboxService(id).subscribe(
      (data)=>{
        this.email_pengirim=data[0]['email_penerima']
        this.email_penerima=data[0]['email_pengirim']
        this.subject=data[0]['subject']
      }
    )
    
  }

}
