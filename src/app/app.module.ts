import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http } from '@angular/http';
import { AppVersion } from '@ionic-native/app-version'

// Import ng2-translate modules for multilingual support
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader} from 'ng2-translate/src/translate.service';

// Import Globalization to obtain user's device language.
import { Globalization } from '@ionic-native/globalization'

// Import pages
import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { TasksPage } from './../pages/tasks/tasks';
import { ObjectsPage } from './../pages/objects/objects';
import { DocumentsPage } from './../pages/documents/documents';
import { SettingsPage } from './../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthenticationProvider } from '../providers/authentication/authentication';
import { QueryParamsBuilder } from './../providers/authentication/query-params';

//Override TranslateLoader for language path file (must declare before @NgModule)
export function createTranslateLoader(http: Http){
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TasksPage,
    ObjectsPage,
    DocumentsPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TasksPage,
    ObjectsPage,
    DocumentsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    QueryParamsBuilder,
    AppVersion
  ]
})

export class AppModule {}
