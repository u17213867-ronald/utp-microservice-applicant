// applicant.model.ts
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';
  import { UserModel } from './user.model';
  
  @Table({
    tableName: 'applicant',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  export class Applicant extends Model<Applicant> {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'Unique identifier for the applicant',
      field: 'id',
    })
    id: number;
  
    @ForeignKey(() => UserModel)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      comment: 'Reference to the user ID',
      field: 'user_id',
    })
    userId: number;
  
    @Column({
      type: DataType.STRING(100),
      allowNull: false,
      comment: 'Applicant first name',
      field: 'first_name',
    })
    firstName: string;
  
    @Column({
      type: DataType.STRING(100),
      allowNull: false,
      comment: 'Applicant last name (father)',
      field: 'last_name_father',
    })
    lastNameFather: string;
  
    @Column({
      type: DataType.STRING(100),
      allowNull: false,
      comment: 'Applicant last name (mother)',
      field: 'last_name_mother',
    })
    lastNameMother: string;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      comment: 'Applicant age',
      field: 'age',
    })
    age: number;
  
    @Column({
      type: DataType.DATEONLY,
      allowNull: false,
      comment: 'Date of birth of the applicant',
      field: 'date_of_birth',
    })
    dateOfBirth: Date;
  
    @CreatedAt
    @Column({
      type: DataType.DATE,
      comment: 'Record creation date',
      field: 'created_at',
    })
    createdAt: Date;
  
    @UpdatedAt
    @Column({
      type: DataType.DATE,
      comment: 'Record update date',
      field: 'updated_at',
    })
    updatedAt: Date;
  
    @Column({
      type: DataType.BOOLEAN,
      defaultValue: true,
      comment: 'Status of the applicant (1 for active, 0 for inactive)',
      field: 'status',
    })
    status: boolean;
  
    @BelongsTo(() => UserModel)
    user: UserModel;
  }
  