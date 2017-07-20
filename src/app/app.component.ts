import { AuthenticationProvider } from './../providers/authentication/authentication';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import ng2-translate modules for multilingual support
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate'
//import { TranslateLoader, TranslateStaticLoader} from 'ng2-translate/src/translate.service';

// Import Globalization to obtain user's device language.
import { Globalization } from '@ionic-native/globalization'

import { defaultLanguage, availableLanguages, sysOptions } from './i18.constants';

import { LoginPage } from './../pages/login/login';
import { TasksPage } from './../pages/tasks/tasks';
import { ObjectsPage } from './../pages/objects/objects';
import { DocumentsPage } from './../pages/documents/documents';
import { SettingsPage } from './../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private translate: TranslateService, 
    private globalization: Globalization) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'TASKS', component: TasksPage, icon: 'list-box' },
      { title: 'OBJECTS', component: ObjectsPage, icon: 'cube' },
      { title: 'DOCUMENTS', component: DocumentsPage, icon: 'folder-open' },
    ];
    if(AuthenticationProvider.isAuthorized()){
      this.rootPage = TasksPage;
    };

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setLanguage()
    });
  }

  setLanguage(){
    this.translate.setDefaultLang(defaultLanguage);
    if(this.platform.is('cordova')){
      this.globalization.getPreferredLanguage()
      .then(res=>{
        var language = this.getSuitableLanguage(res.value);
        this.translate.use(language);
        sysOptions.systemLanguage = language;
      })
    }else{
      let browserLanguage = this.translate.getBrowserLang() || defaultLanguage;
			var language = this.getSuitableLanguage(browserLanguage);
			this.translate.use(language);
			sysOptions.systemLanguage = language;
    }
    
  }

  private getSuitableLanguage(language){
    language = language.substring(0, 2).toLowerCase();
    return availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openSettingsPage(){
    this.nav.push(SettingsPage)
  }

  doLogout(){
    AuthenticationProvider.logout();
    this.nav.setRoot(LoginPage);
  }
}
