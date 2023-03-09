import { Test, TestingModule } from '@nestjs/testing';
import { PokedexController } from './pokedex.controller';
import { PokedexService } from './pokedex.service';

describe('PokedexController', () => {
  let controller: PokedexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokedexController],
      providers: [PokedexService],
    }).compile();

    controller = module.get<PokedexController>(PokedexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
