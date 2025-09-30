import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'comtranse',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'comtranse'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ComtranseDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'comtranse';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.comtranse', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
