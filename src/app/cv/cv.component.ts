import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bgImg = "assets/background-cv.jpg";
  cvPhoto = "assets/photo-cv.png";

  cv = "assets/CV-Laurence-Commerciale.pdf";

}
