import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }
url:string="http://localhost:3000/note";

fetchData():Observable<Note[]>{
  return this.http.get<Note[]>(this.url);
}

}
