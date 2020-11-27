//file creato grazie alla GUIDA UDEMY
import { style } from '@angular/animations';
import { Component } from '@angular/core';
@Component({
    //definire il selettore
    selector: 'app-server',
    //definire template html
    templateUrl: './server.component.html',
    //relation whit css
    styleUrls: ['./server.component.css']
}) //elemento di angular core
export class ServerComponent{
    serverId: number;
    serverStatus: string;

    constructor(){
        this.serverId = this.getRandomInt(1,999);
        this.setServerStatus();
    }

    setServerStatus(){
        //if-else abbreviato
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    }

    getRandomInt(min,max){
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : '#007700';
    }
}
