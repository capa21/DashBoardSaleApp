import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuju-welcome-account',
  templateUrl: './welcome-account.component.html',
  styleUrls: ['./welcome-account.component.css']
})
export class WelcomeAccountComponent implements OnInit {

  nameAccount = 'Mega Tiendas';

  constructor() { }

  ngOnInit(): void {
  }

}
