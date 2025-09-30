import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ComtranseDataSource} from '../datasources';
import {Studentdata, StudentdataRelations} from '../models';

export class StudentdataRepository extends DefaultCrudRepository<
  Studentdata,
  typeof Studentdata.prototype.sid,
  StudentdataRelations
> {
  constructor(
    @inject('datasources.comtranse') dataSource: ComtranseDataSource,
  ) {
    super(Studentdata, dataSource);
  }
}
