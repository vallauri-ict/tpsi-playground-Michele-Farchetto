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
  }

  onUpdateUsername(event: any){
    this.username = event.target.value;
    if (this.username != '') {
      this.allowEnabledButton = true;
    }
    else{
      this.allowEnabledButton = false;
    }
  }

}
