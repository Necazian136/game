import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'game';

  @ViewChild('keyboard') keyboard: ElementRef;

  name: string;

  constructor() {
  }

  ngAfterViewInit(): void {
    const keyboard = this.keyboard.nativeElement;
    keyboard.focus();

    keyboard.onblur = function() {
      keyboard.focus();
    };
  }

  onKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    const inputChar = String.fromCharCode(event.charCode);
    console.log(inputChar);
  }
}
