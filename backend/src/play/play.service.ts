import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as ioHook from 'iohook';
import * as play_sound from 'play-sound';
import { fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class PlayService implements OnModuleDestroy, OnModuleInit {
  private readonly soundFilesPath: string;
  private readonly player;

  constructor() {
    this.player = play_sound({});
    this.soundFilesPath = `${global['rootPath']}/assets/sound-files/`;
    fromEvent(ioHook, 'keydown')
        .pipe(
            map(({ keycode }: any) => keycode),
            filter((keycode) => keycode >= 0 && keycode <= 10),
            tap(id => this.play(id)),
        )
        .subscribe();
  }

  onModuleInit(): void {
    ioHook.start(false);
  }

  onModuleDestroy(): void {
    ioHook.stop();
  }

  playSound(soundId: string) {
    this.player.play(this.soundFilesPath + soundId, err => {
      if (err) { console.error(err); }
    });
    return soundId + ' played';
  }

  private play(id: number) {
    this.player.play(`${this.soundFilesPath}0${id}*`, err => {
      if (err) { console.error(err); }
    });
    return this.soundFilesPath + id + '*' + ' played';
  }
}
