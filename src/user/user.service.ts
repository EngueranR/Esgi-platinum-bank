import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async findAccount(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne<User>({ where: { email } });
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  async create(user: IUser): Promise<User> {
    return await this.userRepository.create<User>({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    });
  }

  async update(id: number, player: IUser): Promise<User> {
    const findID = await this.userRepository.findByPk<User>(id);
    if (!findID) {
      throw new Error('user not found');
    } else {
      await this.userRepository.update(
        { ...player },
        { where: { id: findID.id } },
      );
      return await this.userRepository.findByPk<User>(id);
    }
  }

  async remove(id: number): Promise<number> {
    return this.userRepository.destroy({ where: { id } });
  }
}
