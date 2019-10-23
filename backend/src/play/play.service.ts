import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayService {
  playSound(soundId: string) {
    return soundId + ' played';
  }
}
