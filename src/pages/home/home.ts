import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media, MediaObject, MEDIA_STATUS } from '@ionic-native/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tracks: string[] = [
    'https://groovefox.azureedge.net/on-demand/test/001.m4a',
    'https://groovefox.azureedge.net/on-demand/test/002.m4a',
    'https://groovefox.azureedge.net/on-demand/test/003.m4a',
    'https://groovefox.azureedge.net/on-demand/test/004.m4a',
  ];

  private currentTrack: number = 0;
  constructor(public navCtrl: NavController, private media: Media) {

  }
  
  onPlay(): void {
    let audioObj = this.media.create(this.tracks[this.currentTrack]);
    audioObj.onStatusUpdate.subscribe((status) => {
      if (status === MEDIA_STATUS.STOPPED) {
        audioObj.release();
        this.currentTrack++;
        this.onPlay();
      }
    });
  }
}
