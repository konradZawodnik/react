import { Control } from "react-hook-form";

export interface VisitDataInterface {
  control?: Control<{
    fields: Array<{
      age: string;
      addressCountry: string;
      addressStreet: string;
      addressNumber: string;
      firstName: string;
      isAnotherVisitAddress?: boolean;
      passportNumber?: string;
      peselNumber?: string;
      surname: string;
      symptoms?: string;
      visitAddressCountry?: string;
      visitAddressStreet?: string;
      visitAddressNumber?: string;
    }>
    reportNumber: string;
    visitType: string;
    specialization: string;
    visitDate: Date;
    topic: string;
    isTimeSlotChecked?: boolean;
    additionalInformations?: string;
    language: string;
    visitFrom?: string;
    visitTo?: string;
  }>;
  isTimeSlotChecked?: boolean;
}

export interface VisitDataType {
  additionalInformations?: string;
  isTimeSlotChecked?: boolean;
  language: string;
  reportNumber: string;
  specialization: string;
  topic: string;
  visitDate: Date;
  visitFrom?: string;
  visitTo?: string;
  visitType: string;
}
