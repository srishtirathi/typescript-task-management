import { BadRequestException, PipeTransform } from '@nestjs/common';
import { taskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    taskStatus.OPEN,
    taskStatus.IN_PROGRESS,
    taskStatus.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }
  private isStatusValid(status) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
