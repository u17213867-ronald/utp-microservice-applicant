export interface ApplicantDto {
    id?: number
    userId: number
    firstName: string
    lastNameFather: string
    lastNameMother: string
    age: number
    dateOfBirth: Date
    createdAt?: Date 
    updatedAt?: Date 
    status?: boolean
  }
  

  export interface FilterApplicantDto {
    userId: number
  }