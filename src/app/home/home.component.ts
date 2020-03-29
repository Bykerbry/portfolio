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
      title: "GReen",
      desc: "Using Angular 9 & Google Maps with Refuse & Recycle data from the City of Grand Rapids, GReen is a responsive web app that makes recycling easy. The user can find their next pickup date with the click of a button, find what can & can't be recycled in their bin, locate nearby recycle centers & connect with city resources.",
      icon: "public",
      codeURL: "https://github.com/Bykerbry/GReen",
      appURL: "https://bykerbry.github.io/GReen/"
    },
    {
      title: "Budget Buddy",
      desc: "Using vanilla JavaScript, HTML & CSS, my team & I built a budgeting app. The app is mobile & desktop responsive and git was used for collaboration. A clean & simple user interface walks the user through entering their income & expenses, breaks down the numbers into a weekly budget and generates an expense report.",
      icon: "account_balance",
      codeURL: "https://github.com/ottokeres/Budget-Buddy/",
      appURL: "https://bykerbry.github.io/Budget-Buddy/"
    },
    {
      title: "Recipe Search",
      desc: "Using git to collaborate, my team & I built a web app in Angular 8 that utilizes Edamam's Recipe Search API. We made use of Angular Material for many of the inputs, buttons, icons & dialogs. The user can simply enter a search, apply any dietary restrictions they wish, then see their results neatly displayed. Favorites can also be added and viewed on the favorites page.",
      icon: "restaurant",
      codeURL: "https://github.com/Bykerbry/recipe-api-project",
      appURL: "https://bykerbry.github.io/recipe-api-project/"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
