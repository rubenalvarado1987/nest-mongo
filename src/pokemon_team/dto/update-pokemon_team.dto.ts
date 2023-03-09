import { PartialType } from '@nestjs/swagger';
import { CreatePokemonTeamDto } from './create-pokemon_team.dto';

export class UpdatePokemonTeamDto extends PartialType(CreatePokemonTeamDto) {}
