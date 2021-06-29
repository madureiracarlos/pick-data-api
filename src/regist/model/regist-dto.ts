import { PaymentType } from './payment-type.enum';

export class RegistDto {
  id?: string;
  document: string;
  nationality: string;
  province: string;
  address: string;
  vacine: string;
  latitude?: number;
  longitude?: number;
}
