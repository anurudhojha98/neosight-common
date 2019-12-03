import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'neo-common-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  hide = true;
  isHide = true;
  isValid = true;
  signupObj: any = {};
  @Input() input;
  @Output() userObj = new EventEmitter();
  ngOnInit() {
  }
  onSubmitForm(form) {
    if (form.pristine || form.untouched || form.invalid) {
      this.isValid = false;
    }
  }
  signUp() {
    this.userObj.emit(this.signupObj);
  }
}
