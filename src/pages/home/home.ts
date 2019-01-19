import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private webview: WebView, private platform: Platform) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      const img = this.webview.convertFileSrc('file:///Users/dan/camera-image-12345.png');
    });
  }

}
