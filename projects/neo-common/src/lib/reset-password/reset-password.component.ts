import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'qs-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
    passwordResetted: any;
    showResetForm: any = true;
    uuid: any;
    password1: any;
    password2: any;
    resetPasswordModel: any = { password1: "", password2: "", encudata: "" };
    reset: any = "reset password";
    errorMsg: any = "error"
    constructor() {

    }
    goToLogin() {
    }
    ngOnInit() {

    }

    resetPassword() {
    }

    isValid() {
}
}