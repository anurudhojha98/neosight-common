import { Component, ViewEncapsulation } from "@angular/core";
import { Router} from "@angular/router";
import { MatDialog } from "@angular/material";
//import { ReCaptchaComponent } from "angular2-recaptcha";
import { ViewChild } from "@angular/core";
@Component({
  selector: "qs-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  viewProviders: [],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
 // @ViewChild(ReCaptchaComponent)
  //captcha: ReCaptchaComponent;
  myRecaptcha: boolean = false;
  emailId: string;
  password: string;
  currentUser: any;
  signUpSuccessfull: any = false;
  errorInSignUp: any = false;
  errorMessageInSignUp: any = "";
  errorMessageInForgotPassword: string = "";
  errorInForgotPassword: any = false;
  passwordLinkSentMessage: any = false;
  email: string;
  obj: Object;
  signUpForm: any;
  hideFormTOReset: any = false;

  //-------------------viewObj----------------
  viewObj: any = { isLogin: false, isForgotPassword: false };
  copyViewObj: any =this.viewObj;


  isGstnAlreadyExist: any = false;
  isEmailAlreadyExist: any = false;
  resendActivationLinkShow: any = false;
  isHavingGstn: any = true;
  states: any;
  stateId: any;
  PANNumber: any;
  isSignUpScreen: any = false;
  isSignUpAllowed: any = true;
  myRecaptchaForgotPassword: any = false;
  disableLoginButton: boolean = false;
  siteKey: string = "6LdX1TsUAAAAAFF3aQlXOdFJasqAHrLcGNq78ro1";
  isuserLoggedOut: any;
  signUpObjectModel: any = {
    companyGSTIN: "",
    companyName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    contactPersonName: "",
    mobileNumber: "",
    contactPersonDesignation: "",
    isHavingGstn: "true"
  };
  globalVariable:any={
    gstInNumber: 15, pincode: 6, entityName: 50,
    textBoxMaxLength: 100,
    smallTextBoxMaxLength: 30,
    panMaxLength: 10,
    maxLengthForMobileNumber: 10,
    telephoneNumberLength: 15,
    maxLength: 10,
    maxLengthForString: 255,
    maxLengthForLabel: 100,
    minLengthForHsncode: 4,
    maxLengthForHsncode: 8,
    maxLengthForIECNumber: 10,
    maxLengthForPAN: 10,
    maxLengthForIFSC: 11,
    maxLengthForAadhar: 12,
    reconcileWithImort: false,
    allowDuplicateProductServiceOnInvoice: true,
    gstnRegex: '[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Zz1-9A-Ja-j]{1}[0-9a-zA-Z]{1}',
    emailRegex: '^$|(^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@.+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$)',
    websiteRegex: '^(http:\\/\\/www\.|https:\\/\\/www\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$',
    numbersOnlyRegx: '^\\d+$',
    mobileNumberRegex: '^\\d{10}$',
    CINRegex: '[U|L]{1}\\d{5}[A-Z]{2}\\d{4}[A-Z]{3}\\d{6}',
    LLPINRegex: '[A-Z]{3}\\d{4}',
    PANNumberRegex: '^$|[A-Z]{5}\\d{4}[A-Z]{1}',
    aadharCardNumberRegex: '^\\d{12}$',
    pinCodeRegex: '^$|^[1-9][0-9]{5}$',
    IFSCRegex: '^[A-Za-z]{4}[a-zA-Z0-9]{7}$',
    taxRateRegex: '^([0-9][0-9]{0,1}|28)(,([0-9][0-9]{0,1}|28))*$',
    CESSRegex: '^([0-9][0-9]{0,2}|1000)(,([0-9][0-9]{0,2}|1000))*$',
    basicCustomDutyRegex: '^([0-9][0-9]{0,2}|1000)(,([0-9][0-9]{0,2}|1000))*$',
    tableMappingComponentFromatRegex: '^(0|[1-9][0-9]*)$',
    max_tax_rate: 28,
    disableGstrSave: false,
    disableGstr2Preview: true};
  contactModel:any={
    
  mobile: "+91 9958254539",
  landLine: "0120–4375464",
  mobileNo: "+91 9958254539",
  email: "support@gstvoice.io",
  emailContact: "support@gstvoice.io",
  mumbaiAddress: {
    buildingNo: "324",
    buildingName: "The Summit Business Bay",
    addressLine1: "Behind Guru Nanak Petrol Pump",
    addressLine2: "Andheri-Kurla Road, Andheri East",
    city: "Mumbai",
    pincode: "400 099",
    state: "Maharashtra",
    country: "INDIA"
  },
  noidaAddress: {
    buildingNo: "E-208",
    floorNo: "1st Floor",
    locality: "Sector-63",
    city: "Noida",
    pincode: "201307",
    state: "Uttar Pradesh",
    country: "India",
    companyName: "SHAURYAM SOLUTIONS (P) LTD."
  },
  }
  copyOfSignUpObjectModel: any = this.signUpObjectModel
  selectIndex: any;
  isRemeberMeChecked: any = false;
  termsConditions: any = "I accept the terms and conditions.";
  isTermsAccepted: boolean = false;
  isClicked: boolean = true;
  HIDE_PASSWORD: any = "Hide Password";
  SHOW_PASSWORD: any = "Show Password";
  constructor(
    private _router: Router,
    private _matDialog: MatDialog
  ) {
    this.viewObj.isLogin = true;
    this.isHavingGstn = true;
  }

  ngOnInit(): any {
  }

  autofillEmailId(): any {
  }

  maintenanceWindowAlert(): any {
  }

  displayMaintenanceWindowAlert(obj: any): any {
  
  }

  alertMessage(startDateAndTime: any, endDateAndTime: any, comment: any): any {
  }

  checkRoutingTOForgotPasswordOrEmailVerify(): any {
   
  }

  login(): void {
  }
  getTokenParam(): any {
  }
  getTokenHeader(): any {
  }

  getAccessToken(params: any, options: any): void {
  
  }
  onLoginFail(error: any): void {

  }

  getUserAccess(): void {
  

  }

  setInvoiceSettingPermission(data: any){
  }



  canLogin(currUser: any, permissions: any): void {
 
  }
  setCurrentUserEmailToLocalStorage(userEmail: any): any {
  }

  saveToken(token: any): any {
    if (this.isRemeberMeChecked == true) {
      this.saveEmailIfRememberMeIsChecked();
    }
  }
  saveEmailIfRememberMeIsChecked(): any {
  }
  rememberMeToggle(value: any): any {
    this.isRemeberMeChecked = !value;
  }
  getHeaderOptions(): any {
  }

  setCurrentUser(currUser: any, invocieSettingPermission: any): void {
  }

  setPermissionAndMenu(userAccess: any): void {
  }

  checkInitialSetup(): any {
  
  }

  goForInitialSetup(initialSetup: any): any {

  }

  resendActivationLink(emailId: any): any {

  }

  setCurrentCompany(loggedInUserDetail: any, invocieSettingPermission: any): void {

  }

  redirectToDash(): any {
   
  }
  setStaticData(): void {
   
  }
  getBeforeLoginDataFromServer() {
  }

  loadSettings() {
 
  }

  signUp(signUpForm): void {
   
  
  }
  setCustomeGstn() {
  }
//-------------selectIndex------------------------
  selectedIndex(index, signUpForm?: any, loginForm?: any) {
    if (signUpForm) {
      signUpForm.resetForm();
    }
    if (loginForm) {
      loginForm.resetForm();
    }
    if (index == 1) {
      this.isSignUpScreen = true;
      this.errorInSignUp = false;
      this.myRecaptcha = false
    }
    if (index == 0) {
      this.signUpSuccessfull = true; //this should not be but for reset form I am doing this it will be changed
      this.hideFormTOReset = true;
      this.isSignUpScreen = false;
      this.emailId = "";
      this.password = "";
      this.isSignUpAllowed = true;
    }
  }
  closeErrorBox(boxId) {
    boxId.close();
    setTimeout(() => {
      this.errorInSignUp = false;
      this.errorInForgotPassword = false;
    }, 100);
  }
  isValid() {
    let isValid: any = true;
    if (
      this.signUpObjectModel.password !== this.signUpObjectModel.confirmPassword
    ) {
      isValid = false;
    }
    if (this.isGstnAlreadyExist == true) {
      isValid = false;
    }
    if (this.isEmailAlreadyExist == true) {
      isValid = false;
    }
    if (this.myRecaptcha == false) {
      isValid = false;
    }
    if (this.signUpObjectModel.isTermsAccepted != true) {
      isValid = false;
    }
    return isValid;
  }

  goToForgotPassword() {
    this.viewObj.isForgotPassword = true;
  }
  GoToLogin() {
    this.viewObj.isLogin = true;
    this.passwordLinkSentMessage = "";
    this.email = "";
  }

  getDataByGstn(gstn: any, validPattern: any) {
            this.isGstnAlreadyExist = false;
  }

  validateEmail(email, validPattern) {
      
  }

  sendLink(): void {
    if (this.myRecaptchaForgotPassword == true) {
      this.obj = {
        emailId: this.email
      };
      this.passwordLinkSentMessage = "";
    } else if (this.myRecaptchaForgotPassword == false) {
    }
  }

  handleSignUpCorrectCaptcha(): void {
    this.myRecaptcha = true;
  }
  handleForgotPasswordCorrectCaptcha(): void {
    this.myRecaptchaForgotPassword = true;
  }

  handleExpiredCaptcha(): void {
  }
  termsAndConditions(isTermsAccepted) {
  }
  showPassword(): any {
    let input: any = { type: '' };
    input = document.getElementById('passwordElement');
    if (input.type === 'password') {
      this.isClicked = false;
      input.type = 'text';
    } else {
      this.isClicked = true;
      input.type = 'password';

    }
  }

}
