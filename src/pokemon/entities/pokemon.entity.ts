import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PokemonDocument = Pokemon & Document;

@Schema()
export class Pokemon {
  @Prop()
  no: string;

  @Prop()
  name: string;

  @Prop()
  types: string;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
