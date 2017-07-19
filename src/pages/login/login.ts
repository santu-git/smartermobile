import { TasksPage } from './../tasks/tasks';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthenticationProvider]
})
export class LoginPage {
  private loginForm: FormGroup;
  private loginData: any;
  private show = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private _authService: AuthenticationProvider,
    private loadingCtrl: LoadingController) {
    
      this.loginForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }
  
  doLogin(loginData){
    this.loginData = null;
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
    this._authService.login(loginData).subscribe(
      success=>{
        if(success.logged_in){
          this.loginData = success;
          this.navCtrl.setRoot(TasksPage)
        }else{
          this.loginData = success;
        }
      },
      error=>{
        console.log(error)
        this.loginData = error;
      });
  }
}
