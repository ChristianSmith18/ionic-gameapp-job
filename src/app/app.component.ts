import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Categorías',
      url: '/categories',
      icon: 'file-tray-full',
    },
  ];

  svvrdd = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firestore: AngularFirestore,
  ) {
    this.firestore
      .collection('appGameVenezuela')
      .doc('autorizacion')
      .valueChanges()
      .subscribe((data: any) => {
        this.svvrdd = data.habilitada;
      });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.svvrdd) {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase(),
      );
    }
  }
}
