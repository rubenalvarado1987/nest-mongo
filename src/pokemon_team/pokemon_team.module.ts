import { Module } from '@nestjs/common';
import { PokemonTeamService } from './pokemon_team.service';
import { PokemonTeamController } from './pokemon_team.controller';

@Module({
  controllers: [PokemonTeamController],
  providers: [PokemonTeamService]
})
export class PokemonTeamModule {}
