import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';

import { User } from '../beans/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string= undefined;

	//Form fields
	login: string;
	password: string;

	constructor(private router: Router, private userService: UserService) {}

	logUser= () => {

		this.userService.login(this.login, this.password).toPromise()
			.then((user: User) => {
				this.router.navigate(['home']);
			})
			.catch((err: Response) => {
				console.error(err);
				this.errorMessage = `Server answer status: ${err.status}`;
				if (err.status === 401){
					this.errorMessage += ' (unauthorized)';
				}
			});

	}

  ngOnInit() {
  }

}
