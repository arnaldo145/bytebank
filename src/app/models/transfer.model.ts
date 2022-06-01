export interface Transfer {
  id?: number | string;
  value: number;
  destination: number | string;
  date?: Date;
}
