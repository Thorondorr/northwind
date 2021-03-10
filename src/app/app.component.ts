import { Component } from '@angular/core';
//html datasının kontrol edildiği yer component 'tir.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Fahrican Kaçan";
 
}
