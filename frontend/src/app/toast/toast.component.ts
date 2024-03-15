import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls:["./toast.styles.css"]
})
export class ToastComponent {
  @Input() error:string = "";
}
