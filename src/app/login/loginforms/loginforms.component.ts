import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['Email'];
      this.password = params['Password']
    });
  }

}