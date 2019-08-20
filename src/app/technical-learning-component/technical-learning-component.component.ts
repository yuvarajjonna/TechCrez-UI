declare var require: any;
import { Component, OnInit } from '@angular/core';

let javascript = require('../data/technicalLearning/javaScript.json');
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');

@Component({
  selector: 'app-technical-learning-component',
  templateUrl: './technical-learning-component.component.html',
  styleUrls: ['./technical-learning-component.component.scss']
})
export class TechnicalLearningComponentComponent implements OnInit {

  isToggle: Boolean = true;
  selectedCourse: any = '';

  constructor() { }

  ngOnInit() {
    console.log('javascript', javascript);
  }

  coureSelected(selectedCourse) {
    this.isToggle = false;
    this.selectedCourse = selectedCourse;
  }

  toCourseList() {
    this.isToggle = true;
  }

}
