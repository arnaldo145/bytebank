export interface Transfer {
  id?: number | string;
  value: number;
  destination: string;
  date?: Date;
}
