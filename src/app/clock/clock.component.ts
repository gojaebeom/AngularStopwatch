import { Component, OnInit, Input,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input()
  public inputData : number;

  public min : number = 0;
  public sec : number = 0;
  public ms : number = 0; 
  public time : any;

  public timeStart() : void 
  {
    this.time = setInterval(():any =>
    {
      this.ms++;
    }, 10);
  }


  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes : SimpleChanges)
  {
    for(let propName in changes)
    {
      console.log(`prop 이름 : ${propName}`);
      if(propName === 'inputData' && changes[propName].currentValue == 'start')
      {
        this.timeStart();
      }
      
      console.log(changes);
    }
  }
}
