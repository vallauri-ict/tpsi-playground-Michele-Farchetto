import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', si usa per fare in modo che si possa usare come attributo
  //selector: '.app-servers', utilizzato come classe
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName:string ='';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }
  //on èsolo per chiarezza
  onCreateServer(){
      this.serverCreationStatus = 'Server ' + this.serverName + ' was create !';
  }

  onUpdateServerName(event: any){
    //console.log(event.taget.value);
    this.serverName = event.target.value;
  }

}
