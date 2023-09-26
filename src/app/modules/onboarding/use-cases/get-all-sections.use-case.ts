import { UseCase } from "src/app/kernel/contract"
import { Section } from "../entities/section"

export interface GetAllSectionsUseCase extends UseCase<undefined, Section[]> {}