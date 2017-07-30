import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppColorsService } from './app-colors.service';

import { BlogModel } from './blog/blog.model';
import { ResumeModel } from './resume/resume.model';
import { ContactModel } from './contact/contact.model';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BlogModel,
    ResumeModel,
    ContactModel
  ],
  providers: [
    AppColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
