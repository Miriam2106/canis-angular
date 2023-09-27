import { UseCase } from 'src/app/kernel/contract'
import { Career } from '../entities/career'

export interface GetAllCareersUseCase extends UseCase<undefined, Career[]> {}
