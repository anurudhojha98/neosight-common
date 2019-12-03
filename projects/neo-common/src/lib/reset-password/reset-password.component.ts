import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-common-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  isValid = true;
  forgotPwd: any = {};

  ngOnInit() {
  }
  onSubmitForm(form) {
    if (form.pristine || form.untouched || form.invalid) {
      this.isValid = false;
    }
  }
  forgotPassword() {
    console.log(this.forgotPwd);
  }

}
