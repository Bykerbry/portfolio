import { Component, OnInit } from '@angular/core';
import { IProject } from '../project.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: IProject[] = [
    {
      title: "Recipe Search",
      desc: "Using git to collaborate, my team & I built a web app in Angular 8 that utilizes Edamam's Recipe Search API. We made use of Angular Material for many of the inputs, buttons, icons & dialogs. I was responsible for creating the API request, implementing/displaying filters and formatting the results in the Home page.",
      codeURL: "https://github.com/Bykerbry/recipe-api-project",
      appURL: "https://bykerbry.github.io/recipe-api-project/"
    },
    {
      title: "Budget Buddy",
      desc: "Using vanilla JavaScript, HTML & CSS, my team & I built a budgeting app. The app is mobile & desktop responsive and we used git for collaboration. A clean & simple user interface walks the user through entering their income & expenses, breaks down the numbers into a weekly budget and generates an expense report.",
      codeURL: "https://github.com/ottokeres/Budget-Buddy/",
      appURL: "https://bykerbry.github.io/Budget-Buddy/"
    },
    {
      title: "",
      desc: "",
      codeURL: "",
      appURL: ""
    },
    {
      title: "",
      desc: "",
      codeURL: "",
      appURL: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
