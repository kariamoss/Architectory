import { ArchitectPage } from './../architect/architect';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  items: Array<{ title: string, image: string, codePage: string, latitude: number, longitude: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: 'Rénovation Polytech',
        image: 'https://cdn.static01.nicematin.com/media/npo/1440w/2017/12/fv4a1357.jpg',
        codePage: 'Polytech',
        latitude: 43.6155879,
        longitude: 7.0718865
      },
      {
        title: 'Construction maison bois',
        image: 'https://www.travauxbricolage.fr/wp-content/uploads/2014/09/devis-construction-maison-bois.jpg',
        codePage: 'Maison',
        latitude: 43.5873841,
        longitude: 7.0719873
      }
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(ArchitectPage, {
      title: item.title,
      codePage: item.codePage
    });
  }

}
