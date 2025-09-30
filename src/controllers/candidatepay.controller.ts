import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Candidatepay} from '../models';
import {CandidatepayRepository} from '../repositories';

export class CandidatepayController {
  constructor(
    @repository(CandidatepayRepository)
    public candidatepayRepository : CandidatepayRepository,
  ) {}

  @post('/candidatepays')
  @response(200, {
    description: 'Candidatepay model instance',
    content: {'application/json': {schema: getModelSchemaRef(Candidatepay)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidatepay, {
            title: 'NewCandidatepay',
            exclude: ['cid'],
          }),
        },
      },
    })
    candidatepay: Omit<Candidatepay, 'cid'>,
  ): Promise<Candidatepay> {
    return this.candidatepayRepository.create(candidatepay);
  }

  @get('/candidatepays/count')
  @response(200, {
    description: 'Candidatepay model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Candidatepay) where?: Where<Candidatepay>,
  ): Promise<Count> {
    return this.candidatepayRepository.count(where);
  }

  @get('/candidatepays')
  @response(200, {
    description: 'Array of Candidatepay model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Candidatepay, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Candidatepay) filter?: Filter<Candidatepay>,
  ): Promise<Candidatepay[]> {
    return this.candidatepayRepository.find(filter);
  }

  @patch('/candidatepays')
  @response(200, {
    description: 'Candidatepay PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidatepay, {partial: true}),
        },
      },
    })
    candidatepay: Candidatepay,
    @param.where(Candidatepay) where?: Where<Candidatepay>,
  ): Promise<Count> {
    return this.candidatepayRepository.updateAll(candidatepay, where);
  }

  @get('/candidatepays/{id}')
  @response(200, {
    description: 'Candidatepay model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Candidatepay, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Candidatepay, {exclude: 'where'}) filter?: FilterExcludingWhere<Candidatepay>
  ): Promise<Candidatepay> {
    return this.candidatepayRepository.findById(id, filter);
  }

  @patch('/candidatepays/{id}')
  @response(204, {
    description: 'Candidatepay PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidatepay, {partial: true}),
        },
      },
    })
    candidatepay: Candidatepay,
  ): Promise<void> {
    await this.candidatepayRepository.updateById(id, candidatepay);
  }

  @put('/candidatepays/{id}')
  @response(204, {
    description: 'Candidatepay PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() candidatepay: Candidatepay,
  ): Promise<void> {
    await this.candidatepayRepository.replaceById(id, candidatepay);
  }

  @del('/candidatepays/{id}')
  @response(204, {
    description: 'Candidatepay DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.candidatepayRepository.deleteById(id);
  }
}
