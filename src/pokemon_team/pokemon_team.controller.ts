import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonTeamService } from './pokemon_team.service';
import { CreatePokemonTeamDto } from './dto/create-pokemon_team.dto';
import { UpdatePokemonTeamDto } from './dto/update-pokemon_team.dto';

@Controller('pokemon-team')
export class PokemonTeamController {
  constructor(private readonly pokemonTeamService: PokemonTeamService) {}

  @Post()
  create(@Body() createPokemonTeamDto: CreatePokemonTeamDto) {
    return this.pokemonTeamService.create(createPokemonTeamDto);
  }

  @Get()
  findAll() {
    return this.pokemonTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonTeamDto: UpdatePokemonTeamDto) {
    return this.pokemonTeamService.update(+id, updatePokemonTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonTeamService.remove(+id);
  }
}
