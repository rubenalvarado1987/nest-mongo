import { Test, TestingModule } from '@nestjs/testing';
import { PokemonTeamController } from './pokemon_team.controller';
import { PokemonTeamService } from './pokemon_team.service';

describe('PokemonTeamController', () => {
  let controller: PokemonTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonTeamController],
      providers: [PokemonTeamService],
    }).compile();

    controller = module.get<PokemonTeamController>(PokemonTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
