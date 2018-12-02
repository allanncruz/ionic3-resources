import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

    myPhoto: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private actionSheet: ActionSheetController,
      private camera: Camera,
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
      const options: CameraOptions = {
          quality: 100,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.CAMERA,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG
      };
      this.camera.getPicture(options)
          .then((imageData) => {
              console.log(imageData);
              this.myPhoto = imageData;
          })

          .catch((err) => {
          console.log(err);
      })

  }

}
