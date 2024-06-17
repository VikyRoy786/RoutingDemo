import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template2',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template2.component.html',
  styleUrl: './template2.component.css'
})
export class Template2Component {
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'UAE'),
    new country('3', 'USA')
  ];
  onSubmit(contactForm : any) {
    console.log(contactForm.value);
  }
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
