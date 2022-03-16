import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AlertController, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from '@ionic/storage-angular';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';
import { NewemailComponent } from './newemail/newemail.component';
import { EmailService } from './email.service';
import { DetailinboxComponent } from './detailinbox/detailinbox.component';
import { InboxstarredComponent } from './inboxstarred/inboxstarred.component';
import { SentComponent } from './sent/sent.component';
import { DetailsentComponent } from './detailsent/detailsent.component';
import { Camera } from '@ionic-native/camera/ngx';
import { ReplyComponent } from './reply/reply.component';

const appRoutes: Routes = [
  {path: 'newemail',component : NewemailComponent},
  {path: 'detailinbox/:id',component: DetailinboxComponent},
  {path: 'inboxstarred',component: InboxstarredComponent},
  {path: 'sent',component: SentComponent},
  {path: 'detailsent/:id',component: DetailsentComponent},
  {path: 'reply/:id', component: ReplyComponent},
];


@NgModule({
  declarations: [AppComponent,NewemailComponent,DetailinboxComponent,InboxstarredComponent,SentComponent,DetailsentComponent, ReplyComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot(),RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule, AppRoutingModule],
  providers: [Camera,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },UsersService,EmailService],
  bootstrap: [AppComponent],
})

export class AppModule {}
