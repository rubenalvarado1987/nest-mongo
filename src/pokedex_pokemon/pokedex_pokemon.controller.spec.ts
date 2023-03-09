import { Test, TestingModule } from '@nestjs/testing';
import { PokedexPokemonController } from './pokedex_pokemon.controller';
import { PokedexPokemonService } from './pokedex_pokemon.service';

describe('PokedexPokemonController', () => {
  let controller: PokedexPokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokedexPokemonController],
      providers: [PokedexPokemonService],
    }).compile();

    controller = module.get<PokedexPokemonController>(PokedexPokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
