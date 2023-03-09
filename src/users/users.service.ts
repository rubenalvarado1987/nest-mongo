import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Pokemon, PokemonDocument } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<PokemonDocument>,
  ) {}

  async create(createUserDto: any): Promise<any> {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: any) {
    const users = await this.userModel.findOne({ _id: id }).exec();
    const pokemon = await this.pokemonModel.find().exec();
    const res = { users, pokemon };
    return res;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
