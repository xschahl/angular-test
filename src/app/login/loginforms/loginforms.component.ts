import { Component, enableProdMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'loginforms',
  templateUrl: './loginforms.component.html',
  styleUrls: ['./loginforms.component.css']
})
export class LoginformsComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password']
    });
    this.click_pressed();
  }

  click_pressed(): void {
    if (this.email != undefined && this.password != undefined)
      this.router.navigate(['home']);
  }
}