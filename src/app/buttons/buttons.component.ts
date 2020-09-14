import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit 
{

  @Output()
  public clickEvent : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  /**
   * 시작 버튼 클릭
   */
  public executeButton(commend : string) : void 
  {
    this.clickEvent.emit(commend);
  }
  

}
