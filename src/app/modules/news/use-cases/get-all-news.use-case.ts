import { UseCase } from "src/app/kernel/contract";
import { News } from "../entities/news";

export interface GetAllNewsUseCase extends UseCase<undefined,News[]>{}