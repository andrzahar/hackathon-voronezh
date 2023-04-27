import { Test, TestingModule } from '@nestjs/testing';
import { SportsmanController } from './sportsman.controller';

describe('SportsmanController', () => {
  let controller: SportsmanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportsmanController],
    }).compile();

    controller = module.get<SportsmanController>(SportsmanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
