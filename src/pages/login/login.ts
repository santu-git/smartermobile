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
    this._authService.login(loginData).subscribe(
      success=>{
        if(success.logged_in){
          this.navCtrl.setRoot(TasksPage)
        }else{
          
        }
      },
      error=>{
        
      });
  }
}
