import { Module } from '@nestjs/common';
import { PlayModule } from './play/play.module';
import * as path from "path";

@Module({
  imports: [PlayModule],
})
export class AppModule {
  constructor() {
    global['rootPath'] = path.resolve(__dirname).replace(/(src\/app|src\\app)/, '');
  }
}
