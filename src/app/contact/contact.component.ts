import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string= 'ecommerce@worldline-sdco.com';
	phone: string= "+33 XXXXXXXXX";
	address: string= "Rue de la pointe, 59113 Seclin";	

	message: string= "";

	constructor(){}

	updateMessage(data: any){
		this.message= data.target.value;
    console.log(this.message);
	}

	sendMessage(){
		this.message= "";
	}

  ngOnInit() {
  }

}