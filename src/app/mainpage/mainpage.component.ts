import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../note.service';
import { HttpClient } from '@angular/common/http';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Note } from 'note';
import { observable } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  notes=[];
  
  isAdded:boolean;
  constructor(private httpref:NoteService,private http:HttpClient,private route:ActivatedRoute) { }
  url:string="http://localhost:5500/note";
  
  notesObject:object={
    'title':'',
    'note':'',
    'file':''
  }  
  pinObject:object={
    'title':'',
    'note':'',
    'file':''
  }
  
  pinNote(id,title,notes,file){
    const url:string="http://localhost:5500/note/"+id;
    console.log(id)
    console.log(title)
    console.log(notes)
    console.log(file)
    this.http.get<Note[]>(url).subscribe(value=>{
      this.pinObject=value
      console.log("hello"+this.pinObject)
    })
  }
  
  focusoutFunction(title,note,id){
    console.log(title);
    
    return this.http.put(this.url,this.url+'/'+id).subscribe((response:Response)=>{
      this.isAdded=true;
      
      this.httpref.fetchData().subscribe(data=>{
        this.notesObject=data
        
      })
    })
  }

  deleteOption(id){  
    console.log(id)
    document.getElementById('options').style.display="block";
  }
  
  
  deleteData(id){
    const url:string=`http://localhost:5500/note/${id}`;
    this.http.delete(url).toPromise().then(()=>{
      this.httpref.fetchData().subscribe(data=>{
        this.notesObject=data;
      })
    })
    document.getElementById('deleteNote').style.visibility="hidden";
  }
  colourId:any;
  
  
  
  
  onSubmit(form:NgForm){
    this.notesObject=form.value
    // console.log(this.notesObject)
    console.log("colo"+form.value.colour8)
    this.colourId=form.value.id;
    
    // this.route.navigate(['/mainpage']);
    
    // this.notesObject.constructor(document.getElementById('allNotes').style.backgroundColor="red")
    return this.http.post(this.url,this.notesObject).subscribe((response:Response)=>{
      this.isAdded=true;
      console.log(form.value.id)  
      this.httpref.fetchData().subscribe(data=>{
        this.notesObject=data
        console.log(this.notesObject)
        
      })
    })
  }
  upload(id){
    console.log("load"+id)
    document.getElementById('opennote').style.display="block";
    document.getElementById('inputNote').focus();     
    document.getElementById('notebarmain').style.display="none";
    document.getElementById('file').click();
  }
  
  display(){
    
    document.getElementById('icons4').style.display="block";
  }
  ngOnInit() {
    
    //opening note
    document.getElementById('inputNoteMain').addEventListener('click',()=>{
      document.getElementById('opennote').style.display="block";
      document.getElementById('inputNote').focus();     
      document.getElementById('notebarmain').style.display="none";
      
    })
    // document.getElementById('opennote').addEventListener('mouseout',()=>{
    //   document.getElementById('opennote').style.display="none";
    
    //   document.getElementById('notebarmain').style.display="block";
    
    // })
    
    document.getElementById('close').addEventListener('click',()=>{
      // document.getElementById('icons').style.display="none";
      document.getElementById('opennote').style.display="none";
      document.getElementById('notebarmain').style.display="block";
      
    })
    document.getElementById('upload').addEventListener('click',()=>{
      document.getElementById('file').click();
    })
    document.getElementById('uploadfile').addEventListener('click',()=>{
      document.getElementById('file').click();
      document.getElementById('opennote').style.display="block";
      document.getElementById('inputNote').focus();     
      document.getElementById('notebarmain').style.display="none";  
    })
    
    document.getElementById('colour1').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="white";
    })
    document.getElementById('colour2').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(242,139,130)";
    })
    document.getElementById('colour3').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(251,188,4)";
    })
    document.getElementById('colour4').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(242,139,130)";
    })
    document.getElementById('colour5').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(255,244,117)";
    })
    document.getElementById('colour6').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(167,255,235)";
    })
    document.getElementById('colour7').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(203,240,248)";
    })
    document.getElementById('colour8').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(174,203,250)";
    })
    document.getElementById('colour9').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(253,207,232)";
    })
    document.getElementById('colour10').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(230,201,168)";
    })
    document.getElementById('colour11').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(232,234,237)";
    })
    document.getElementById('colour12').addEventListener('click',()=>{
      document.getElementById('notebar').style.backgroundColor="rgb(242,139,130)";
    })
    
    document.getElementById('brush').addEventListener('mouseenter',()=>{
      document.getElementById('colourpalette').style.visibility="visible";
    })
    
    document.getElementById('colourpalette').addEventListener('mouseleave',()=>{
      document.getElementById('colourpalette').style.visibility="hidden";
    })
    // document.getElementById('allNotes').addEventListener('mouseenter',()=>{
    //   // document.getElementById('icons4').style.display="block";
    // })
    
    
    
    
    this.httpref.fetchData().subscribe(data=>{
      this.notesObject=data
      console.log(this.notesObject)
      
    })
    
    
  }
  
}
