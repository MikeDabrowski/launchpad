import { Controller, Get, Param } from '@nestjs/common';
import { PlayService } from 'src/play/play.service';

@Controller('play')
export class PlayController {

  constructor(private playService: PlayService) {}

  @Get('sound/:id')
  playSound(@Param('id') soundId: string) {
    return this.playService.playSound(soundId);
  }
}
