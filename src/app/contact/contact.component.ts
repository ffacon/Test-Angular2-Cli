import { Component, OnInit } from '@angular/core';

import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string;
	phone: string;
	address: string;	

	message: string= "";

	constructor(contactService: ContactService){
    this.email= contactService.email;
		this.phone= contactService.phone;
		this.address= contactService.address;
  }

	updateMessage(data: any){
		this.message= data.target.value;
	}

	sendMessage(){
		this.message= "";
	}

  ngOnInit() {
  }

}
