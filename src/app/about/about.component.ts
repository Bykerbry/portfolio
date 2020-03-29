import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  icons: any[] = [
    {
      name: "HTML5",
      class: "fab fa-html5",
      color: "#e34f26",
    },
    {
      name: "CSS3",
      class: "fab fa-css3-alt",
      color: "#214ce5",
    },
    {
      name: "JS",
      class: "fab fa-js-square",
      color: "#f0d43d",
    },
    {
      name: "Angular",
      class: "fab fa-angular",
      color: "#dd1b16",
    },
    {
      name: "Node.js",
      class: "fab fa-node",
      color: "#25bc61",
    },
  ]

}
