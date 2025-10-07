import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello';
import { FooterComponent } from './footer/footer';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, CommonModule, HelloComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = "Angular Kitchen";
  clickCount = 0;
  
  changeName() {
    this.clickCount++;
    if (this.clickCount % 2 === 0) {
      this.title = "Typescript";
    } else {
      this.title = "Angular Kitchen";
    }
  }
  
  run: boolean = false;
  user = [
    {name: 'Gopi', age: 26, gender: 'm'},
    {name: 'kannan', age: 35, gender: 'm'},
    {name: 'john', age: 23, gender: 'm'},
    {name: 'Hasini', age: 34, gender: 'f'}
  ];
  
  colorName = 'yellow';
  color = 'red';
  borderStyle = '1px solid black';
  isBordered = true;
  name: string = "Angular";
  day = new Date();
  num = 2345.57898766;
  n = 20;
  
  // Additional interactive methods
  toggleRun() {
    this.run = !this.run;
  }
  
  toggleBorder() {
    this.isBordered = !this.isBordered;
  }
  
  getClickMessage() {
    return this.clickCount > 0 ? `Clicked ${this.clickCount} times!` : 'Click the button above!';
  }
}
