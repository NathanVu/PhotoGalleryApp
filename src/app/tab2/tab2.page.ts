import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  photos: any;

  // tslint:disable-next-line: no-shadowed-variable
  constructor( private camera: Camera, public photoService: PhotoService) { }


}
