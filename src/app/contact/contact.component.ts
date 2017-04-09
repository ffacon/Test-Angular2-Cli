import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {ContactService} from '../services/contact.service';


function containsValidCharacters(c:FormControl){

	let specialChars= ['\\','<', '>', '&' ];
  
	for (let i in specialChars){
		if ( c.value !== undefined && c.value.indexOf(specialChars[i]) != -1 ){
		  return {'containsValidCharacters': true };
		}
	}
	return null;
}

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

	controlGroup: FormGroup;
	messageCtrl: FormControl;

	constructor(contactService: ContactService, fb: FormBuilder){
    this.email= contactService.email;
		this.phone= contactService.phone;
		this.address= contactService.address;

		this.messageCtrl = fb.control('', [Validators.required, containsValidCharacters]);
		this.controlGroup= fb.group({
			'messageCtrl': this.messageCtrl
		});
  }


	updateMessage(data: any){
		this.message= data.target.value;
	}

	sendMessage(){
		console.log("message to send:" + this.message );
		this.message= "";
	}

  ngOnInit() {
  }

}