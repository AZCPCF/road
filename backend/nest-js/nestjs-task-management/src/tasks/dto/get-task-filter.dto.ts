import { IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks.entity';

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  
  @IsOptional()
  search?: string;
}
