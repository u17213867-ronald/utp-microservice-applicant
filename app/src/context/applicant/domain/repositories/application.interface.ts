// src/application/interfaces/application.interface.ts
export interface ApplicationInterface {
    id: number;
    applicantId: number;
    announcementId: number;
    applicationCategoryId?: number;
    datetime?: Date;
    active: boolean;
    discarded: boolean;
    invitation: boolean;
    messagesRead: number;
    messagesUnread: number;
    cvSummary: string;
    messagesToRespond: number;
    messagesResponded: number;
    isNew: boolean;
    educationLevel: string;
    career: string;
    referred: boolean;
    applicationSource: string;
    invitationDatetime?: Date;
  }
  