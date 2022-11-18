import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'navbar',
  templateUrl: './nav-container.html',
  styleUrls: ['../styling/app.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'navbar';

  constructor() {}

  ngOnInit(): void {
    //do something;
  }
}
