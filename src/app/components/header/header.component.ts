import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'home',},
    {linkId: 2, linkName: 'event',},
    {linkId: 3, linkName: 'profile',}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
