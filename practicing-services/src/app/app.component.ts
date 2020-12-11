import { Component } from '@angular/core';

import { BlogDataService } from './blog-data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lezione pomeridiana 11/12/2020: practicing-services ';
  
  posts = []
  //è sufficiente creare un istanza della variabile perch è con Injectable ignetta direttamente nella variabile
  //come la using di c#
  constructor(blogDataService: BlogDataService){
    blogDataService.getPosts().subscribe(
      (data: any) => this.posts = data
    );
  } 
}
