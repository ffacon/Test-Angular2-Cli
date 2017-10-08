import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public email: string= "ecom@worldline.com";
  phone: string= "+33 xxxxxxxx" 
  address: string= "rue de la pointe Seclin"
  message="";

  constructor() { }
  
  updateTextContent  = (data:any) =>{
    this.message = data.target.value;
    console.log(this.message);
  }

  sendMessage = () => {
    this.message ="";
  }

  ngOnInit() {

  }

}