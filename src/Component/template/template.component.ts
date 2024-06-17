import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {
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
