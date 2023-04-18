import { shortid } from 'src/lib/shortid';
import { BeforeInsert, CreateDateColumn, PrimaryColumn } from 'typeorm';

export class BaseColumnEntity {
  @PrimaryColumn('varchar', {
    length: 20,
  })
  id?: string;

  @BeforeInsert()
  setId() {
    this.id = shortid.generateId(8);
  }

  @CreateDateColumn({ type: 'timestamp' })
  create_date?: Date;
}
