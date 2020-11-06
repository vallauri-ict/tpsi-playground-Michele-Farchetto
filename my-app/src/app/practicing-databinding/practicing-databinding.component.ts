import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding', //selettore del nuovo componente
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {

  allowEnabledButton: boolean = false;
  username: string = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  onResetUsername(){
    this.username = '';
    this.allowEnabledButton = false;
  }

  onUpdateUsername(event: any){
    //this.username = event.target.value;
    //con mgmodel , non è necessario usare la stringa sopra
    //perchè il comando ngmodel ti permette di non doversi preoccupare della variabile perchè la prende in automatico
    this.allowEnabledButton = this.username != '';
    //questa strnga serve per fare un il condensato , in modo da settare a true , nel caso si verifichi la conizione seguente
  }

}
