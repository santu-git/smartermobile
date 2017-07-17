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
  private myLanguage = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService) {
    this.languages = availableLanguages;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  applyLanguage(lang){
    this.translate.use(lang);
  }

}
