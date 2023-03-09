import { Module } from '@nestjs/common';
import { PokedexPokemonService } from './pokedex_pokemon.service';
import { PokedexPokemonController } from './pokedex_pokemon.controller';

@Module({
  controllers: [PokedexPokemonController],
  providers: [PokedexPokemonService]
})
export class PokedexPokemonModule {}
