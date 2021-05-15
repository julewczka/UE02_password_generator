import {Component, Input} from '@angular/core';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
})
export class PasswordComponent {
  @Input() password: string = "";
  @Input() count: number= 0;
}
