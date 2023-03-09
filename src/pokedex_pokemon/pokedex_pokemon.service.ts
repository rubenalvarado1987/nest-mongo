import { Injectable } from '@nestjs/common';
import { CreatePokedexPokemonDto } from './dto/create-pokedex_pokemon.dto';
import { UpdatePokedexPokemonDto } from './dto/update-pokedex_pokemon.dto';

@Injectable()
export class PokedexPokemonService {
  create(createPokedexPokemonDto: CreatePokedexPokemonDto) {
    return 'This action adds a new pokedexPokemon';
  }

  findAll() {
    return `This action returns all pokedexPokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokedexPokemon`;
  }

  update(id: number, updatePokedexPokemonDto: UpdatePokedexPokemonDto) {
    return `This action updates a #${id} pokedexPokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokedexPokemon`;
  }
}
