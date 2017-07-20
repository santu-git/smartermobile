SMARTERMOBILE App
=====================

Description Here

## Using this project

Checkout project from repository

```bash
$ git clone https://sdm-sky@bitbucket.org/sm3team/sm3-client.git
```
Install node packages
```bash
$ npm install
```

Add platforms

```bash
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

Install required plugins listed in package.json

```bash
$ ionic state restore --plugins
```

OR

```bash
$ cordova state restore --plugins
```

Build project(Dev Mode)

```bash
$ ionic cordova build android
$ ionic cordova build ios
```

Build project(Prod Mode)

```bash
$ ionic cordova build android --prod
$ ionic cordova build ios --prod
```

Run on browser (app view)

```bash
$ ionic serve --lcs
```

Run on browser (web view)

```bash
$ ionic serve
```

Run your app on emulator

```bash
$ ionic cordova emulate android
$ ionic cordova emulate ios
```
Run your app on android device in 
```bash
$ ionic cordova run android --livereload -cs
```

Only remove all installed plugins

```bash
$ ionic state clear -- plugins
```

Remove all then Install all plugins in package.json

```bash
$ ionic state reset -- plugins
```

Install a particular cordova plugin

```bash
$ ionic cordova plugin add <plugin-id>
$ ionic cordova plugin add <git https url>
```

Install a particular js library

```bash
$ npm install <lib name> --save
```

Preview app in Ionic View (Without installing .apk)
- Install Ionic View app from https://play.google.com/store/apps/details?id=com.ionic.viewapp
- APP ID 845a35e2 
