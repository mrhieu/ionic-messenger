import { Component } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    
  }

  async openSettings() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

}
