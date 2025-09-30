import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Studentdata} from '../models';
import {StudentdataRepository} from '../repositories';

export class StudentdataController {
  constructor(
    @repository(StudentdataRepository)
    public studentdataRepository: StudentdataRepository,
  ) { }

  // ✅ Create a new student
  @post('/studentdata')
  @response(200, {
    description: 'Studentdata model instance',
    content: {'application/json': {schema: getModelSchemaRef(Studentdata)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Studentdata, {
            title: 'NewStudentdata',
            exclude: ['sid'],
          }),
        },
      },
    })
    studentdata: Omit<Studentdata, 'sid'>,
  ): Promise<Studentdata> {
    return this.studentdataRepository.create(studentdata);
  }

  // ✅ Count students
  @get('/studentdata/count')
  @response(200, {
    description: 'Studentdata model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Studentdata) where?: Where<Studentdata>,
  ): Promise<Count> {
    return this.studentdataRepository.count(where);
  }

  // ✅ Get all student names
  @get('/studentdata/names')
  @response(200, {
    description: 'Get all student names',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {type: 'string'},
        },
      },
    },
  })
  async getStudentNames(): Promise<string[]> {
    const students = await this.studentdataRepository.find({
      fields: {sname: true},
    });
    return students.map((s) => s.sname);
  }

  // ✅ Get all student records
  @get('/studentdata')
  @response(200, {
    description: 'Array of Studentdata',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Studentdata, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Studentdata) filter?: Filter<Studentdata>,
  ): Promise<Studentdata[]> {
    return this.studentdataRepository.find(filter);
  }

  // ✅ Patch all (bulk update)
  @patch('/studentdata')
  @response(200, {
    description: 'Studentdata PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Studentdata, {partial: true}),
        },
      },
    })
    studentdata: Studentdata,
    @param.where(Studentdata) where?: Where<Studentdata>,
  ): Promise<Count> {
    return this.studentdataRepository.updateAll(studentdata, where);
  }

  // ✅ Get one by ID
  @get('/studentdata/{id}')
  @response(200, {
    description: 'Studentdata model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Studentdata, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Studentdata, {exclude: 'where'}) filter?: FilterExcludingWhere<Studentdata>
  ): Promise<Studentdata> {
    return this.studentdataRepository.findById(id, filter);
  }

  // ✅ Patch one by ID
  @patch('/studentdata/{id}')
  @response(204, {
    description: 'Studentdata PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Studentdata, {partial: true}),
        },
      },
    })
    studentdata: Studentdata,
  ): Promise<void> {
    await this.studentdataRepository.updateById(id, studentdata);
  }

  // ✅ Replace one by ID
  @put('/studentdata/{id}')
  @response(204, {
    description: 'Studentdata PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() studentdata: Studentdata,
  ): Promise<void> {
    await this.studentdataRepository.replaceById(id, studentdata);
  }

  // ✅ Delete one by ID
  @del('/studentdata/{id}')
  @response(204, {
    description: 'Studentdata DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.studentdataRepository.deleteById(id);
  }
}
