import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppColorsService } from './app-colors.service';
import { AppLoginComponent } from './app-login.component';
import { AppBackendService } from './app-backend.service';
import { SocketService } from './socket.service';

import { BlogModel } from './blog/blog.model';
import { ResumeModel } from './resume/resume.model';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BlogModel,
    ResumeModel
  ],
  providers: [
    AppColorsService,
    AppBackendService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
