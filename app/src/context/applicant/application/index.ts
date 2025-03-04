import { UserApplicantService, ApplicantService, GetApplicantService, UpdateApplicantService } from "./services/applicant.service";
import { ApplicationService } from "./services/application.service";

// applicant module entry point
export const APPLICATION_SERVICES = [
    ApplicantService,
    GetApplicantService,
    UpdateApplicantService,
    ApplicationService,
    UserApplicantService
]