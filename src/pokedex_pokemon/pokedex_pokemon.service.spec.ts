import { Test, TestingModule } from '@nestjs/testing';
import { PokedexPokemonService } from './pokedex_pokemon.service';

describe('PokedexPokemonService', () => {
  let service: PokedexPokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokedexPokemonService],
    }).compile();

    service = module.get<PokedexPokemonService>(PokedexPokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
