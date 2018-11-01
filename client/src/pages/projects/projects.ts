import { ArchitectPage } from './../architect/architect';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
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
        latitude: 43.5878445,
        longitude: 7.0720335
      }
    ]
  }

  ngOnInit() {
    this.localizate();
  }

  localizate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      const latitude = resp.coords.latitude
      const longitude = resp.coords.longitude
      this.items.forEach( (item) => {
        if (latitude >= item.latitude - 0.001 && latitude <= item.latitude + 0.001
          && longitude >= item.longitude - 0.001 && longitude <= item.longitude + 0.001) {
          this.itemTapped(item);
          console.log(item.title);
        }
        console.log('Not passing : ' + item.title + '. With latitude ' + latitude + ' and longitude ' + longitude);
      })
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  itemTapped(item) {
    this.navCtrl.push(ArchitectPage, {
      title: item.title,
      codePage: item.codePage
    });
  }

}
