import { Controller, Get, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { TaskResponseDto } from './dto/task-response.dto';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    /**
     * 
     * @returns TaskResponseDto[]
     */

    @Get()
    @UseGuards(AccessTokenGuard)
    getAllTasks(): Promise<TaskResponseDto[]> {
        return this.tasksService.getAllTasks();
    }
}
