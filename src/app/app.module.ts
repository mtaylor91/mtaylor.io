import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppColorsService } from './app-colors.service';

import { BlogModel } from './blog/blog.model';
import { ResumeModel } from './resume/resume.model';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BlogModel,
    ResumeModel
  ],
  providers: [
    AppColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
