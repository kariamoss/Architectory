import { Injectable, HostListener } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class HtmlUtilsService {

  screenHeight: number;
  screenWidth: number;

  constructor(platform: Platform) {
    platform.ready().then((readySource) => {
      this.screenHeight = platform.height();
      this.screenWidth = platform.width();
    });
  }

  isMobile() {
    return this.screenWidth <= 575;
  }

  platformIs() {
    if (this.screenWidth <= 575) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  }

  platformToSend() {
    if (this.screenWidth <= 575) {
      return 'desktop';
    } else {
      return 'mobile';
    }
  }

}