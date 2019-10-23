import { Module } from '@nestjs/common';
import { SoundModule } from './sound/sound.module';

@Module({
  imports: [SoundModule],
})
export class AppModule {
}
