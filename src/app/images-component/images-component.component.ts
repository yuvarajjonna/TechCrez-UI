import { Component, OnInit } from '@angular/core';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-images-component',
  templateUrl: './images-component.component.html',
  styleUrls: ['./images-component.component.scss']
})
export class PublishComponentComponent implements OnInit {
  
  selectedFile: ImageSnippet;

  selectedLink: string;
  published:any = [];
  data:any = {
    name: '',
    desc: ''
  };
  image:any = {
    name: '',
    imageData: {}
  };
  imagePublishedName: string = '';


  constructor() { }

  ngOnInit() {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.image.imageData = this.selectedFile;
      
    });

    reader.readAsDataURL(file);
  }
  
  publishImage() {
    if(localStorage.getItem('publishedStorage')) {
      this.published = JSON.parse(localStorage.getItem('publishedStorage'));
    }
    this.published.push(this.image);
    localStorage.setItem('publishedStorage', JSON.stringify(this.published));
    this.image.name =  '';
    this.image.imageData = {};
    window.alert('published image successfully');
  }

  setradio(e: string): void {  
    this.selectedLink = e;  
  }

  addContact(name,desc){
    this.data.name = name;
    this.data.desc = desc;
    if(localStorage.getItem('publishedStorage')) {
      this.published = JSON.parse(localStorage.getItem('publishedStorage'));
    }
    this.published.push(this.data);
    localStorage.setItem('publishedStorage', JSON.stringify(this.published));
    this.data.name = '';
    this.data.desc = '';
    window.alert('published story successfully');
    this.setradio('done');
  }
  
  isSelected(name: string): boolean {  
    if (!this.selectedLink) {  
      return false;  
    }  
    return (this.selectedLink === name);  
  }  

}
