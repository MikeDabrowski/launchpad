import { Injectable } from '@nestjs/common';
import * as play_sound from 'play-sound';

@Injectable()
export class PlayService {
  private readonly soundFilesPath: string;
  private readonly player;
  constructor() {
    this.player = play_sound({});
    this.soundFilesPath = `${global['rootPath']}/assets/sound-files/`
  }
  playSound(soundId: string) {
    this.player.play(this.soundFilesPath + soundId, function(err){
      if (err) console.error(err);
    });
    return soundId + ' played';
  }
}
