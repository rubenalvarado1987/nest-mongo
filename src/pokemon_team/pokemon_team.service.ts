import { Injectable } from '@nestjs/common';
import { CreatePokemonTeamDto } from './dto/create-pokemon_team.dto';
import { UpdatePokemonTeamDto } from './dto/update-pokemon_team.dto';

@Injectable()
export class PokemonTeamService {
  create(createPokemonTeamDto: CreatePokemonTeamDto) {
    return 'This action adds a new pokemonTeam';
  }

  findAll() {
    return `This action returns all pokemonTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemonTeam`;
  }

  update(id: number, updatePokemonTeamDto: UpdatePokemonTeamDto) {
    return `This action updates a #${id} pokemonTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemonTeam`;
  }
}
