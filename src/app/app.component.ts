import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutingDemo';

  constructor (private route : Router){
    
  }
  goHome(){
    this.route.navigate(['/', 'home']);
  }
  goservice(){
    this.route.navigate(['/', 'home']);
  }
  goAbout(){
    this.route.navigate(['/', 'home']);
  }
  goContact() {
    this.route.navigate(['/', 'contact']);
  }
  goTempolate(){
    this.route.navigate(['/', 'template']);
  }
  goTemplate2(){
    this.route.navigate(['/', 'template2'])
  }
  gotoReactiveForm(){
    this.route.navigate(['/', 'reactiveForm'])
  }
  gotoReactiveForm2(){
    this.route.navigate(['/', 'reactiveForm2'])
  }
}
