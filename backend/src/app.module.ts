import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as path from 'path';
import { PlayModule } from './play/play.module';

@Module({
  imports: [PlayModule],
})
export class AppModule {
  constructor() {
    global['rootPath'] = path.resolve(__dirname)
        .replace(/(src\/app|src\\app)/, '');
  }
}
