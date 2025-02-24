import { ApplicantService, GetApplicantService, UpdateApplicantService } from "./services/applicant.service";

// applicant module entry point
export const APPLICATION_SERVICES = [
    ApplicantService,
    GetApplicantService,
    UpdateApplicantService
]