import {Entity, model, property} from '@loopback/repository';

@model()
export class Candidatepay extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cid?: number;

  @property({
    type: 'number',
    required: true,
  })
  fkcpayid: number;

  @property({
    type: 'string',
    required: true,
  })
  paymode: string;

  @property({
    type: 'number',
    required: true,
  })
  paidpayment: number;

  @property({
    type: 'string',
    required: true,
  })
  paydate: string;
  @property({
    type: 'string',
    required: true,
  })
  address?: string;

  constructor(data?: Partial<Candidatepay>) {
    super(data);
  }
}

export interface CandidatepayRelations {
  // describe navigational properties here
}

export type CandidatepayWithRelations = Candidatepay & CandidatepayRelations;
