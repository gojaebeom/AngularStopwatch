import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public present : string;
  
  public title : string = 'stopwatch';

  public startTime(type : string) : void
  {
    this.present = type;
    console.log(`받은 값 : ${this.present}`);
  }
}
