import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
// import { Bank } from './bank.entity';

@Table
export class DAB extends Model<DAB> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING)
  location: string;

  @Column(DataType.STRING)
  status: string;

  // @ForeignKey(() => Bank)
  // @Column
  // bankId: number;
}
