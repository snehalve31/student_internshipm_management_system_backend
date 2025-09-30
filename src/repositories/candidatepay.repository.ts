import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ComtranseDataSource} from '../datasources';
import {Candidatepay, CandidatepayRelations} from '../models';

export class CandidatepayRepository extends DefaultCrudRepository<
  Candidatepay,
  typeof Candidatepay.prototype.cid,
  CandidatepayRelations
> {
  constructor(
    @inject('datasources.comtranse') dataSource: ComtranseDataSource,
  ) {
    super(Candidatepay, dataSource);
  }
}
