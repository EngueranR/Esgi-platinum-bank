import { Inject, Injectable } from '@nestjs/common';
import { DAB } from './dab.entity';
import { IDAB } from './dab.interface';

@Injectable()
export class DABService {
  constructor(@Inject('DAB_REPOSITORY') private dabRepository: typeof DAB) {}

  async findAll(): Promise<DAB[]> {
    return await this.dabRepository.findAll<DAB>();
  }

  async findOne(id: number): Promise<DAB> {
    return await this.dabRepository.findOne<DAB>({ where: { id } });
  }

  async create(dab: IDAB): Promise<DAB> {
    return await this.dabRepository.create<DAB>({ ...dab });
  }

  async update(id: number, dab: IDAB): Promise<DAB> {
    const findID = await this.dabRepository.findByPk<DAB>(id);
    if (!findID) {
      throw new Error('DAB not found');
    } else {
      await this.dabRepository.update({ ...dab }, { where: { id: findID.id } });
      return await this.dabRepository.findByPk<DAB>(id);
    }
  }

  async remove(id: number): Promise<number> {
    return this.dabRepository.destroy({ where: { id } });
  }
}
