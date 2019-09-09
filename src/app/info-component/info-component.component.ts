import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.scss']
})
export class InfoComponentComponent implements OnInit {

  notesData: any = [];
  listData:any = {
    list: '',
    id: null 
  };
  istoggle: boolean = true;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('notes')) {
      this.notesData = JSON.parse(localStorage.getItem('notes'));
    }
  }

  saveNotes(notes) {
    this.listData.list = notes;
    if(this.listData.id == null){
      this.notesData.push(this.listData); 
    } else {
      this.notesData[this.listData.id].list = notes; 
      this.listData.id = null;
    }
    localStorage.setItem('notes', JSON.stringify(this.notesData));
    this.notesData = JSON.parse(localStorage.getItem('notes'));
    this.istoggle = true;
  }

  cancelNotes() {
    this.notesData = JSON.parse(localStorage.getItem('notes'));
    this.istoggle = true;
  }

  editNotes(id) {
    this.notesData = JSON.parse(localStorage.getItem('notes'));
    this.listData.list = this.notesData[id].list;
    this.listData.id = id;
    this.istoggle = false;
  }

  deleteNotes(id) {
    this.notesData = JSON.parse(localStorage.getItem('notes'));
    this.notesData.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(this.notesData));
  }

}
