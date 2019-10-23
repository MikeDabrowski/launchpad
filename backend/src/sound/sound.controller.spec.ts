import { Test, TestingModule } from '@nestjs/testing';
import { SoundController } from './sound.controller';

describe('Sound Controller', () => {
  let controller: SoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoundController],
    }).compile();

    controller = module.get<SoundController>(SoundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
