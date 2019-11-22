import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  photos: any;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(  public photoService: PhotoService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log('hello');
  }
}
