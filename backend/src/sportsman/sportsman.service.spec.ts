import { Test, TestingModule } from '@nestjs/testing';
import { SportsmanService } from './sportsman.service';

describe('SportsmanService', () => {
  let service: SportsmanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportsmanService],
    }).compile();

    service = module.get<SportsmanService>(SportsmanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
