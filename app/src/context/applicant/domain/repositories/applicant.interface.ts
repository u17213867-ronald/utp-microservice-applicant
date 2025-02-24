export interface ApplicantInterface {
    id?: number; // Opcional, ya que será autogenerado
    userId: number;
    firstName: string;
    lastNameFather: string;
    lastNameMother: string;
    age: number;
    dateOfBirth: Date;
    createdAt?: Date; // Opcional, será asignado automáticamente
    updatedAt?: Date; // Opcional, será asignado automáticamente
    status?: boolean; // Opcional, con valor por defecto
  }
  