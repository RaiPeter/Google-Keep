import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {HttpModule} from '@angular/http';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {  Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NoteService } from './note.service';
import { NotesComponent } from './notes/notes.component';

const routes:Routes=[
  {path:"",component:LoginformComponent},
  {path:"mainpage",component:MainpageComponent},
  {path:"notes",component:NotesComponent},
  {path:"register",component:RegisterComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    MainpageComponent,
    RegisterComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
