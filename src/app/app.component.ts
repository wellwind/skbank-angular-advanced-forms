import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(router:Router, route:ActivatedRoute) {
    router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      )
      .forEach(e => {
        if (route.root.firstChild.firstChild) {
          this.title = route.root.firstChild.firstChild.snapshot.data['title'];
        } else{
          this.title = route.root.firstChild.snapshot.data['title'];
        }
    });
  }
}
