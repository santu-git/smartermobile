import { AppVersion } from '@ionic-native/app-version';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { defaultLanguage, availableLanguages, sysOptions } from './i18.constants';
import { defaultLanguage, availableLanguages, sysOptions } from './../../app/i18.constants';
import { TranslateService } from "ng2-translate";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  private languages = availableLanguages;
  private myLanguage = sysOptions;
  private app_version: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private translate: TranslateService,
    private app: AppVersion) {
    //this.languages = availableLanguages;
    this.getAppVersion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  applyLanguage(lang){
    this.translate.use(lang);
    sysOptions.systemLanguage = lang;
  }

  getAppVersion(){
    this.app.getVersionNumber()
      .then((data)=>{
        this.app_version = data;
      })
      .catch((error)=>{
        console.log (error)
      })
  }

}
