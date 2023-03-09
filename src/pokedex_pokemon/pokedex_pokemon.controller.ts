import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokedexPokemonService } from './pokedex_pokemon.service';
import { CreatePokedexPokemonDto } from './dto/create-pokedex_pokemon.dto';
import { UpdatePokedexPokemonDto } from './dto/update-pokedex_pokemon.dto';

@Controller('pokedex-pokemon')
export class PokedexPokemonController {
  constructor(private readonly pokedexPokemonService: PokedexPokemonService) {}

  @Post()
  create(@Body() createPokedexPokemonDto: CreatePokedexPokemonDto) {
    return this.pokedexPokemonService.create(createPokedexPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokedexPokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokedexPokemonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokedexPokemonDto: UpdatePokedexPokemonDto) {
    return this.pokedexPokemonService.update(+id, updatePokedexPokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokedexPokemonService.remove(+id);
  }
}
