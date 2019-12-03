import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'neo-common-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  hide = true;
  isValid = true;
  loginObj: any = {};

  @Input() input;
  @Output() userObj = new EventEmitter();
  ngOnInit() {
  }

  onSubmitForm(form) {
    if (form.pristine || form.untouched || form.invalid) {
      this.isValid = false;
    }
  }
  login() {
    this.userObj.emit(this.loginObj);
  }



}
