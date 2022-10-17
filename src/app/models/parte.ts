import { Time } from '@angular/common';

export class Parte {
  id: number;
  fecha: Date;
  hora: Time;
  descripcion: string;
  incidencia: boolean;
  tiempo: number;
  latitud: number;
  longitud: number;
}
