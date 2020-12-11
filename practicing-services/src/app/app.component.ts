import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicing-services Lezione pomeridiana 11/12/2020';
  
  posts = 
    [
      { "id": 1, "title": "Introduzione a json-server", "author": "Oscar" },
      { "id": 2, "title": "Filosofia della didattica", "author": "Cortese" },
      { "id": 3, "title": "Sicurezza delle rete", "author": "Piovano" },
      { "id": 4, "title": "Le direttive in Angular", "author": "Oscar" },
      { "id": 5, "title": "Configurare un gateway", "author": "Piovano" }
    ];
}
