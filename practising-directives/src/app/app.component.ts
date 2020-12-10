import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Lesson: Practising Directives App is Running';

  //#region Angular New Appplication
  isDetailsVisible: boolean = false;
  toggleDetailsButtonLable:string = "Show Details";

  logs:any = [];

  onToggleDetailsClick(){
    this.isDetailsVisible = !this.isDetailsVisible;
    this.toggleDetailsButtonLable = this.isDetailsVisible ? 'Hide Details' : 'Show Details';
    this.logs.push(Date.now().toString());
    console.log(this.logs);
  }
  //#endregion
}
