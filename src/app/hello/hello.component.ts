import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() 
  title !: string;
  @Input()
  show_name !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
