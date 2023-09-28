import { UseCase } from 'src/app/kernel/contract'
import { Degree } from '../entities/degree'

export interface GetAllDegreesUseCase extends UseCase<undefined, Degree[]> {}
