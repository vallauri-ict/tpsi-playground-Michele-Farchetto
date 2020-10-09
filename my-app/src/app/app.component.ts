import { Component } from '@angular/core';
// @ = decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["BOND, JAMES BOND","BATMAN","TERMINATOR","CHARLES LECLERC","DARTH VADER","LUKE SKYWALKER"];
  myName = 'Michele Farchetto'

  changeName(){
    this.myName = this.names[this.getRandomInt(0,5)];
    //this.names[Math.floor((Math.random() * this.names.length))] è l'alternatian javascript
  }

  getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
  }
}
