import { ApplicationInterface } from "./application.interface"


export abstract class ApplicationRepository {
  findById: (id: number) => Promise<ApplicationInterface | null>
  findByApplicantId: (applicantId: number) => Promise<ApplicationInterface | null>
  create: (application: Partial<ApplicationInterface>) => Promise<ApplicationInterface>
  update: (id: number, updates: Partial<ApplicationInterface>) => Promise<ApplicationInterface>
  delete: (id: number) => Promise<number>
  findActiveApplicationsByApplicantId: (applicantId: number) => Promise<ApplicationInterface[]>
  findByAnnouncementId: (announcementId: number) => Promise<ApplicationInterface[]>
}
