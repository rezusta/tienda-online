import {
  HttpInterceptorFn,
  HttpResponse
} from '@angular/common/http';

import { of } from 'rxjs';

export interface Expediente {
    numero: string;
    titulo: string;
    estado: EstadoExpediente;
    prioridad: PrioridadExpediente;
    fechaAlta: Date;
    fechaVencimiento: Date;
    solicitante: string;
    unidad: string;
    descripcion: string;
};

export type EstadoExpediente = 'abierto' | 'cerrado' | 'en_proceso';
export type PrioridadExpediente = 'alta' | 'media' | 'baja';

const EXPEDIENTES_MOCK: Expediente[] = [
  {
    numero: 'EXP-2026-001',
    titulo: 'Solicitud de licencia de actividad',
    estado: 'abierto',
    prioridad: 'alta',
    fechaAlta: new Date('2026-01-15'),
    fechaVencimiento: new Date('2026-09-30'),
    solicitante: 'María García López',
    unidad: 'Urbanismo',
    descripcion: 'Solicitud de licencia para apertura de establecimiento comercial.'
  },
  {
    numero: 'EXP-2026-002',
    titulo: 'Renovación de contrato de mantenimiento',
    estado: 'en_proceso',
    prioridad: 'media',
    fechaAlta: new Date('2026-02-10'),
    fechaVencimiento: new Date('2026-10-15'),
    solicitante: 'Carlos Martínez Ruiz',
    unidad: 'Contratación',
    descripcion: 'Renovación del contrato anual de mantenimiento de instalaciones.'
  },
  {
    numero: 'EXP-2026-003',
    titulo: 'Subvención para actividad cultural',
    estado: 'cerrado',
    prioridad: 'baja',
    fechaAlta: new Date('2026-03-05'),
    fechaVencimiento: new Date('2026-06-30'),
    solicitante: 'Asociación Cultural Norte',
    unidad: 'Cultura',
    descripcion: 'Solicitud de subvención para la organización de actividades culturales.'
  },
  {
    numero: 'EXP-2026-004',
    titulo: 'Reclamación patrimonial',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-04-22'),
    fechaVencimiento: new Date('2026-08-31'),
    solicitante: 'Laura Sánchez Pérez',
    unidad: 'Servicios Jurídicos',
    descripcion: 'Expediente de responsabilidad patrimonial por daños materiales.'
  },
  {
    numero: 'EXP-2026-005',
    titulo: 'Autorización de ocupación de vía pública',
    estado: 'abierto',
    prioridad: 'media',
    fechaAlta: new Date('2026-07-03'),
    fechaVencimiento: new Date('2026-09-15'),
    solicitante: 'Construcciones Navarra S.L.',
    unidad: 'Obras Públicas',
    descripcion: 'Solicitud para ocupación temporal de vía pública durante trabajos de reforma.'
  }
];

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.method === 'GET' && req.url === '/api/expedientes') {

    return of(
      new HttpResponse({
        status: 200,
        body: EXPEDIENTES_MOCK
      })
    );

  }

  return next(req);
};