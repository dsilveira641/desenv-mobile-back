import { Test, TestingModule } from '@nestjs/testing';
import { LivrosTesteService } from './livros-teste.service';

describe('LivrosTesteService', () => {
  let service: LivrosTesteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivrosTesteService],
    }).compile();

    service = module.get<LivrosTesteService>(LivrosTesteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
