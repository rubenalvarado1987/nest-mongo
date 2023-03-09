import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PokedexModule } from './pokedex/pokedex.module';
import { PokedexPokemonModule } from './pokedex_pokemon/pokedex_pokemon.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonTeamModule } from './pokemon_team/pokemon_team.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/pokemons'),
    PokedexModule,
    PokedexPokemonModule,
    PokemonModule,
    PokemonTeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
