import { ApplicantInterface } from './applicant.interface';

export abstract class  ApplicantRepository {
  findById: (id: number) => Promise<ApplicantInterface | null>;
  findByUserId: (userId: number) => Promise<ApplicantInterface | null>;
  create:(applicant: Partial<ApplicantInterface>) => Promise<ApplicantInterface>;
  update:(id: number, updates: Partial<ApplicantInterface>) => Promise<ApplicantInterface>;
  delete:(id: number) => Promise<number>;
}
