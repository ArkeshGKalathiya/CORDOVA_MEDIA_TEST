import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media } from '@ionic-native/media';
import { MusicControls } from '@ionic-native/music-controls';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	private musicControl = null;
	public tracks = [
		{
			album: 'song1',
			artist: 'test artist 1',
			image : 'https://www.billboard.com/files/styles/900_wide/public/media/Taylor-Swift-1989-album-covers-billboard-1000x1000.jpg',
			path: 'https://groovefox.azureedge.net/on-demand/test/001.m4a',
		}, {
			album: 'song2',
			artist: 'test artist 2',
			image : 'https://www.billboard.com/files/styles/900_wide/public/media/Ohio-Players-Honey-album-covers-billboard-1000x1000.jpg',
			path: 'https://groovefox.azureedge.net/on-demand/test/002.m4a',
		}, {
			album: 'song3',
			artist: 'test artist 3',
			image : 'https://www.billboard.com/files/styles/900_wide/public/media/Yeah-Yeah-Yeahs-Its-Blitz-album-covers-billboard-1000x1000.jpg',
			path: 'https://groovefox.azureedge.net/on-demand/test/003.m4a',
		}, {
			album: 'song4',
			artist: 'test artist 4',
			image : 'https://www.billboard.com/files/styles/900_wide/public/media/Wanted-The-Outlaws-Waylon-Jennings-Jessi-Colter-Willie-Nelson-Tompall-Glaser-album-covers-billboard-1000x1000.jpg',
			path: 'https://groovefox.azureedge.net/on-demand/test/004.m4a'
		}




	];

	private currentTrack: number = 0;
	constructor(
		public navCtrl: NavController,
		private media: Media,
		private mediaControls : MusicControls
	) {

		let playingTrack = this.tracks[this.currentTrack];

	}

	onPlay(): void {


		let audioObj = new Media();

		let track = this.tracks[this.currentTrack].path;
		if (!track) {
			this.currentTrack = 0;
			track = this.tracks[this.currentTrack].path;
		}

		let mediaObject = audioObj.create(track);

		mediaObject.play({
			playAudioWhenScreenIsLocked: true
		});

		this.setMusicControls();

		mediaObject.onError.subscribe((error) => {
		});

		mediaObject.onSuccess.subscribe((success) => {
		});

		mediaObject.onStatusUpdate.subscribe((a) => {
			if (a == 4) {
				this.currentTrack++;
				// mediaObject.release();	important to remove this line...... do not release object
				this.onPlay();
			}
		});



	}


	private setMusicControls(){
		let playingTrack = this.tracks[this.currentTrack];

		this.mediaControls.create({
			album : playingTrack.album,
			artist : playingTrack.artist,
			cover : playingTrack.image
		});
	}

}
