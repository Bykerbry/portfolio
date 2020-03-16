import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  routes: string[]= ['home', 'about', 'resume', 'contact'];
  opened: any; 
  mobile: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
  // Below 600px is good. @601px to 635px is desktop. From 636px to 960px its mobile again...
  constructor(private breakpointObserver: BreakpointObserver) { 
  }

}
