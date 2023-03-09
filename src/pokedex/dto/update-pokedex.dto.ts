import { PartialType } from '@nestjs/swagger';
import { CreatePokedexDto } from './create-pokedex.dto';

export class UpdatePokedexDto extends PartialType(CreatePokedexDto) {}
