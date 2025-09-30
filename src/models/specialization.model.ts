import {Entity, model, property} from '@loopback/repository';

@model()
export class Specialization extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  speid?: number;

  @property({
    type: 'string',
    required: true,
  })
  language: string;


  constructor(data?: Partial<Specialization>) {
    super(data);
  }
}

export interface SpecializationRelations {
  // describe navigational properties here
}

export type SpecializationWithRelations = Specialization & SpecializationRelations;
