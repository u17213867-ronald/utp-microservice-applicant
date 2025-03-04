'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applications', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      applicant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      job_posting_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      application_category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      datetime: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Application date and time',
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: 'When the applicant applies = 1, When withdrawn = 0',
      },
      discarded: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'When applied = 0, When rejected by company = 1',
      },
      invitation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      messages_read: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      messages_unread: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cv_summary: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      messages_to_respond: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Messages that require a response',
      },
      messages_responded: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Messages that have been responded to',
      },
      is_new: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      match_score: {
        type: Sequelize.DECIMAL(8,5),
        allowNull: true,
        comment: 'Precomputed field for tracking progress',
      },
      education_level: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: 'Precomputed field for tracking progress',
      },
      career: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: 'Precomputed field for tracking progress',
      },
      referred: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      application_source: {
        type: Sequelize.ENUM('aptitus', 'api', 'mobile', 'fair', 'tcn'),
        allowNull: true,
      },
      invitation_datetime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    });

    // Definir claves foráneas
    await queryInterface.addConstraint('applications', {
      fields: ['applicant_id'],
      type: 'foreign key',
      name: 'fk_application_applicant',
      references: {
        table: 'applicants',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('applications', {
      fields: ['job_posting_id'],
      type: 'foreign key',
      name: 'fk_application_job_posting',
      references: {
        table: 'job_postings',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('applications', {
      fields: ['application_category_id'],
      type: 'foreign key',
      name: 'fk_application_category',
      references: {
        table: 'application_categories',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    // Agregar índice único
    await queryInterface.addIndex('applications', ['applicant_id', 'job_posting_id'], {
      unique: true,
      name: 'unique_application',
    });

    // Agregar índice para búsqueda rápida
    await queryInterface.addIndex('applications', ['active'], {
      using: 'HASH',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('applications');
  }
};
