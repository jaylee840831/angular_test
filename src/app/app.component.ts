import { OpenApiService } from './@services/open-api.service';
import { ExampleService } from './@services/example.service';
import { User } from './@modules/user.module';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoStatusType } from './@modules/todo.module';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}
}
