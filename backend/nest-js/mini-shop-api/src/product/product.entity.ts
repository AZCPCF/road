import { Category } from 'src/category/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'numeric' })
  price: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  category: Category;
}
