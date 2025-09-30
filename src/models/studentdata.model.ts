import {Entity, model, property} from '@loopback/repository';

@model()
export class Studentdata extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  sid?: number;

  @property({
    type: 'string',
    required: true,
  })
  sname: string;

  @property({
    type: 'number',
    required: true,
  })
  mobileno: number;



  @property({
    type: 'number',
    required: true,
  })
  month: number;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  secondmobileno: number;

  @property({
    type: 'string',
    required: false, // ✅ change this line
  })
  birthdate: string;

  @property({
    type: 'string',
    required: true,
  })
  joininigdate: string;

  @property({
    type: 'string',
    required: true,
  })
  regisdate: string;
  @property({
    type: 'string',
    required: true,
  })
  address: string;
  @property({
    type: 'number',
    required: true,
  })
  fkspeid: number; // ← foreign key to specialization.speid
  @property({
    type: 'string',
  })
  lang?: string; // optional, frontend ke display ke liye

  constructor(data?: Partial<Studentdata>) {
    super(data);
  }
}

export interface StudentdataRelations {
  // describe navigational properties here
}

export type StudentdataWithRelations = Studentdata & StudentdataRelations;
