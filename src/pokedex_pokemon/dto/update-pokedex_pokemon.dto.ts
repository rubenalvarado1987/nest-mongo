import { PartialType } from '@nestjs/swagger';
import { CreatePokedexPokemonDto } from './create-pokedex_pokemon.dto';

export class UpdatePokedexPokemonDto extends PartialType(CreatePokedexPokemonDto) {}
