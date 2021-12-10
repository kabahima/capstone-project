import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';


@Table
export class VideoShare extends Model<VideoShare> {
  @Column
  public Description!: string;

  @Column
  public url!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
