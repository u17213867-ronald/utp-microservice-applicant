import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'application', timestamps: false })
export class Application extends Model<Application> {

  @Column({ 
    type: DataType.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
    field: 'id' 
  })
  id: number;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: false, 
    field: 'applicant_id' 
  })
  applicantId: number;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: false, 
    field: 'announcement_id' 
  })
  announcementId: number;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: true, 
    field: 'application_category_id' 
  })
  applicationCategoryId: number;

  @Column({ 
    type: DataType.DATE, 
    allowNull: true, 
    field: 'datetime' 
  })
  datetime: Date;

  @Column({ 
    type: DataType.TINYINT, 
    allowNull: false, 
    defaultValue: 1,
    field: 'active' 
  })
  active: boolean;

  @Column({ 
    type: DataType.TINYINT, 
    allowNull: false, 
    defaultValue: 0,
    field: 'discarded' 
  })
  discarded: boolean;

  @Column({ 
    type: DataType.TINYINT, 
    allowNull: false, 
    defaultValue: 0,
    field: 'invitation' 
  })
  invitation: boolean;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: false, 
    field: 'messages_read' 
  })
  messagesRead: number;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: false, 
    field: 'messages_unread' 
  })
  messagesUnread: number;

  @Column({ 
    type: DataType.TEXT, 
    allowNull: true, 
    field: 'cv_summary' 
  })
  cvSummary: string;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: true, 
    field: 'messages_to_respond' 
  })
  messagesToRespond: number;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: true, 
    field: 'messages_responded' 
  })
  messagesResponded: number;

  @Column({ 
    type: DataType.TINYINT, 
    allowNull: true, 
    field: 'is_new' 
  })
  isNew: boolean;

  @Column({ 
    type: DataType.DECIMAL(8, 5), 
    allowNull: true, 
    field: 'match_score' 
  })
  matchScore: number;

  @Column({ 
    type: DataType.STRING(100), 
    allowNull: true, 
    field: 'education_level' 
  })
  educationLevel: string;

  @Column({ 
    type: DataType.STRING(100), 
    allowNull: true, 
    field: 'career' 
  })
  career: string;

  @Column({ 
    type: DataType.TINYINT, 
    allowNull: false, 
    defaultValue: 0, 
    field: 'referred' 
  })
  referred: boolean;

  @Column({ 
    type: DataType.ENUM('aptitus', 'api', 'mobile', 'fair', 'tcn'), 
    allowNull: true, 
    field: 'application_source' 
  })
  applicationSource: string;

  @Column({ 
    type: DataType.DATE, 
    allowNull: true, 
    field: 'invitation_datetime' 
  })
  invitationDatetime: Date;
}
