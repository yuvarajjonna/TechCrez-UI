declare var require: any;

import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


let regionData = require('../data/regionData.json');

@Component({
  selector: 'app-top-trending-component',
  templateUrl: './top-trending-component.component.html',
  styleUrls: ['./top-trending-component.component.scss']
})
export class TopTrendingComponentComponent implements OnInit {

  regionData: any = [];
  selectedRegion: any = {};
  trendingVideos: any = [];
  embedUrl = 'https://www.youtube.com/embed/'

  config = {
    displayKey:"regionName",
    search: true,
    height: '300px',
    placeholder:'Select',
    customComparator: ()=>{} ,
    limitTo: regionData.length,
    moreText: 'more', 
    noResultsFound: 'No results found!',
    searchPlaceholder:'Search' ,
    searchOnKey: 'regionName' 
    }

  constructor(private  httpClient:HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.regionData = regionData;
  }

  getData(selectedRegion) {
    if(selectedRegion.value) {
      this.selectedRegion = selectedRegion.value;
      let url = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode='+selectedRegion.value.regionCode+'&maxResults=15&key=AIzaSyAhDepjAUTyR7M7hMA9LY_Cl20uXCwO-Mo'
      this.httpClient
        .get(url)
        .subscribe(
          data  => {
            this.trendingVideos = data;
            for(var i=0;i<this.trendingVideos.items.length; i++) {
              this.trendingVideos.items[i].id = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl+this.trendingVideos.items[i].id) 
            }
          }, error  => {
            console.log("Rrror", error);
          }
        );
    }
  }


}
