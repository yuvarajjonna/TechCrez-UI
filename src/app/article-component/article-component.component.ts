import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.scss']
})
export class ArticleComponentComponent implements OnInit {

  listData:any = [];

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('publishedStorage')) {
      this.listData = JSON.parse(localStorage.getItem('publishedStorage'));
    }
  }

  delete(index) {
    this.listData.splice(index, 1);
    localStorage.setItem('publishedStorage', JSON.stringify(this.listData));
  }

}
