import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class HelloComponent implements OnInit {
  courseName: string = "Angular";
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
