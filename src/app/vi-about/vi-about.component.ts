import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vi-about',
  templateUrl: './vi-about.component.html',
  styleUrls: ['./vi-about.component.css']
})
export class ViAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videoSource = "../../assets/image/about/video.mp4"
}
