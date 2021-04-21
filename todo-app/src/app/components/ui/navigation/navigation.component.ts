import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd   } from '@angular/router'; 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  currentUrl: string;
  constructor( private router: Router) {

  this.router.events.subscribe(
    (event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;
      }
    }
  );

}
}
