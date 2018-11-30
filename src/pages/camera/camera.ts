import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private actionSheet: ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  choosePhoto() {
    let actionSheet = this.actionSheet.create({
        title: 'Selecione uma imagem',
        buttons: [
            {
              text: 'Tirar foto',
                handler: () => {
                this.takePhoto()
                }
            },
            {
                text: 'Escolher foto',
                handler: () => {
                    this.takePhoto()
                }
            },
            {
                text: 'Cancelar foto',
                role: 'cancel'
            }
        ]
    })

      actionSheet.present();

  }

  saveImage() {

  }

  private takePhoto() {

  }

}
