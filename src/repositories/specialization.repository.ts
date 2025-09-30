import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ComtranseDataSource} from '../datasources';
import {Specialization, SpecializationRelations} from '../models';

export class SpecializationRepository extends DefaultCrudRepository<
  Specialization,
  typeof Specialization.prototype.speid,
  SpecializationRelations
> {
  constructor(
    @inject('datasources.comtranse') dataSource: ComtranseDataSource,
  ) {
    super(Specialization, dataSource);
  }
}
