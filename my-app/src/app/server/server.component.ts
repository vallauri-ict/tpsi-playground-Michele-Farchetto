//file creato grazie alla GUIDA UDEMY
import { Component } from '@angular/core';
@Component({
    //definire il selettore
    selector: 'app-server',
    //definire template html
    templateUrl: './server.component.html'
}) //elemento di angular core
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = '';

    setServerStatus(){
        //if-else abbreviato
        this.serverStatus = this.getRandomInt(0,1) == 0 ? 'offline' : 'online';
        this.serverId = this.getRandomInt(1,100);
        return this.serverStatus;
    }

    getRandomInt(min,max){
        return Math.floor(Math.random() * (max-min+1))+min;
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}
