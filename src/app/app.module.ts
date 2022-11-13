import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, AppRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
