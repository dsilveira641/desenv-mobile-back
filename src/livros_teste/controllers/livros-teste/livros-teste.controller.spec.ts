import { Test, TestingModule } from '@nestjs/testing';
import { LivrosTesteController } from './livros-teste.controller';

describe('LivrosTesteController', () => {
  let controller: LivrosTesteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivrosTesteController],
    }).compile();

    controller = module.get<LivrosTesteController>(LivrosTesteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
