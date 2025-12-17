import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.entity';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
